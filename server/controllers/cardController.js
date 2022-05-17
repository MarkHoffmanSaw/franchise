const Card = require("../models/cardModel");
const catchAsync = require("../utils/catchAsync");
const handlerFactory = require("./handlerFactory");

// Queries with cards:
exports.getCardCategories = catchAsync(async (req, res, next) => {
  const stats = await Card.aggregate([
    {
      $group: {
        _id: "$fullDescription.category",
        numCards: { $sum: 1 },
      },
    },
    { $sort: { _id: 1 } },
  ]);
  // Return categories and an amount of cards for each one
  res.status(200).json({
    status: "success",
    stats,
  });
});

// CRUD operations:
exports.createCard = handlerFactory.createOne(Card);
exports.getAllCards = handlerFactory.getAll(Card);
exports.getCard = handlerFactory.getOne(Card);
exports.updateCard = handlerFactory.updateOne(Card);
exports.deleteCard = handlerFactory.deleteOne(Card);
