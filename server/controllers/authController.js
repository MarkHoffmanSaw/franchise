const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// JWT functions
const createJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const sendJWT = (user, status, res) => {
  const token = createJWT(user._id);

  // Set up the cookie
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    secure: process.env.NODE_ENV === "production" ? true : false,
    httpOnly: true,
  };

  // Save the cookie
  res.cookie("jwt", token, cookieOptions);

  res.status(status).json({
    status: "success",
    statusCode: status,
    token,
    data: {
      user,
    },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  // Send the email:
  // ***********

  // Create and send JWT
  sendJWT(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // Check the email and password by existing
  if (!email || !password)
    return next(new AppError("Please enter the email and password!", 400));

  // Find an user with the email and show up the password (select: false)
  const user = await User.findOne({ email }).select("+password");

  // Check the password
  if (!user || !(await user.correctPassword(password, user.password)))
    return next(new AppError("Not correct email or password", 401));

  // Create and send JWT
  sendJWT(user, 201, res);
});

exports.logout = (req, res) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({ status: "success" });
};

// Protect any middleware for only authorization users
exports.protect = catchAsync(async (req, res, next) => {
  let token;

  // Get JWT from headers/cookies
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  // Check JWT by existing
  if (!token)
    return next(
      new AppError("You haven't got the access. Please, log in", 401)
    );

  // Verify JWT: return { id, iat, exp }
  const decoded = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET_KEY
  );

  // Check the user by JWT
  const currentUser = await User.findById(decoded.id);
  if (!currentUser)
    return next(new AppError("Invalid token for the user", 401));

  // Check if the user changed the password after when JWT was created
  if (currentUser.changedPasswordAfter(decoded.iat))
    return next(
      new AppError("The user changed the password recently. Log in again", 401)
    );

  // Add the user into request and go to next
  req.user = currentUser;
  res.locals.user = currentUser; // for React Components
  next();
});
