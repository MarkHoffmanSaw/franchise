const express = require("express");

const cardController = require("../controllers/cardController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .post(cardController.createCard)
  .get(cardController.getAllCards);

router
  .route("/:id")
  .get(cardController.getCard)
  .patch(cardController.updateCard)
  .delete(cardController.deleteCard);

module.exports = router;
