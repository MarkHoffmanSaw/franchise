const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  image: { type: String },
  title: { type: String, required: [true, "The franchise must have a title"] },
  description: {
    type: String,
    required: [true, "The franchise must have a description"],
  },
  priceMin: { type: Number, default: 1000 },
  priceMax: { type: Number, default: 1000 },
  fullDescription: {
    category: String,
    foundYear: Number,
    companyDescr: String,
    franchDescr: String,
    buyersRequirements: String,
    quartersRequirements: String,
  },
});

const Card = new mongoose.model("Card", cardSchema);

module.exports = Card;
