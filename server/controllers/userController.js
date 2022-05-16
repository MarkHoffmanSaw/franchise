const User = require("../models/userModel");
const handlerFactory = require("./handlerFactory");

exports.createUser = handlerFactory.createOne(User);
exports.getAllUsers = handlerFactory.getAll(User);
exports.getUser = handlerFactory.getOne(User);
exports.updateUser = handlerFactory.updateOne(User);
exports.deleteUser = handlerFactory.deleteOne(User);
