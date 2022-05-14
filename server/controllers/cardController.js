const Card = require("../models/cardModel");

exports.getAllCards = async (req, res, next) => {
  try {
    const data = await Card.find();
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
