const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Card = require("../models/cardModel");

dotenv.config({ path: "../config.env" });

const db = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(db, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successful connection to the DB");
  });

const cards = JSON.parse(
  fs.readFileSync(`${__dirname}/cardsInfo.json`, "utf-8")
);

const importData = async () => {
  try {
    await Card.create(cards);
    console.log("Data was loaded!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Card.deleteMany();
    console.log("Data was deleted from the DB!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
