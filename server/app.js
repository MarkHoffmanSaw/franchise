const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");

const cardRouter = require("./routes/cardRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(express.json({ limit: "10kb", extended: true }));
app.use(express.urlencoded({ limit: "10kb", extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use("/api/v1/cards", cardRouter);
app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find '${req.originalUrl}' in the server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
