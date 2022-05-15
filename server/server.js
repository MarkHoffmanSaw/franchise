const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

// Errors (sync):
process.on("uncaughtException", (err) => {
  console.log(err, err.name, err.message);
  console.log("Uncaught exception, shutting down...");
  process.exit(1);
});

// DB connection
const db = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(db, { useNewUrlParser: true }).then(() => {
  console.log("Successful connection to the MongoDB");
});

// Run the server
const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log("Server mode:", process.env.NODE_ENV);
  console.log(`App is running on port ${port}`);
});

// Errors (async):
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled rejection, shutting down...");
  server.close(() => process.exit(1));
});
