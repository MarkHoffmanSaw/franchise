const Card = require("../models/cardModel");
const handlerFactory = require("./handlerFactory");

exports.createCard = handlerFactory.createOne(Card);
exports.getAllCards = handlerFactory.getAll(Card);
exports.getCard = handlerFactory.getOne(Card);
exports.updateCard = handlerFactory.updateOne(Card);
exports.deleteCard = handlerFactory.deleteOne(Card);
