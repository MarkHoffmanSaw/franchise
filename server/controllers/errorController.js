// Handlers for errors:
const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

const handleDublicateFieldsDB = (err) => {
  const value = err.keyValue.name;
  const message = `Duplicate field value: "${value}". Please use another value`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid data: ${errors.join(". ")}`;

  return new AppError(message, 400);
};

const handleJWTError = () =>
  new AppError("Invalid token! Please log in again.", 401);

const handleJWTExpiredError = () =>
  new AppError("Your token has expired! Please log in again", 401);

// Global error handler:
module.exports = (err, req, res, next) => {
  err.status = err.status || "failed";
  err.statusCode = err.statusCode || 500;

  let error = { ...err };
  error.message = err.message;

  // For production:
  if (process.env.NODE_ENV === "production")
    res.status(err.statusCode).json({
      status: err.status,
      error: "Something went wrong...",
    });

  // Errors from 'mongoose':
  if (err.name === "CastError") error = handleCastErrorDB(error);
  if (err.code === 11000) error = handleDublicateFieldsDB(error); // or: === 'MongoServerError'
  if (err._message === "Validation failed")
    error = handleValidationErrorDB(error);
  // Errors from JWT:
  if (err.name === "JsonWebTokenError") error = handleJWTError();
  if (err.name === "TokenExpiredError") error = handleJWTExpiredError();

  // Another errors:
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};
