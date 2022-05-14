const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const cardRouter = require("./routes/cardRoutes");

const app = express();

app.use(express.json({ limit: "10kb", extended: true }));
app.use(express.urlencoded({ limit: "10kb", extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use("/api/v1/cards", cardRouter);

module.exports = app;
