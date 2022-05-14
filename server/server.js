const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const db = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(db, { useNewUrlParser: true }).then(() => {
  console.log("Successful connection to the MongoDB");
});

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log("Server mode:", process.env.NODE_ENV);
  console.log(`App is running on port ${port}`);
});
