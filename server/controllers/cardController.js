const Card = require("../models/cardModel");
const handlerFactory = require("./handlerFactory");

// for an admin:
exports.createCard = handlerFactory.createOne(Card);

// for users:
exports.getAllCards = handlerFactory.getAll(Card);
exports.getCard = handlerFactory.getOne(Card);
