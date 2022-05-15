const express = require("express");

const cardController = require("../controllers/cardController");

const router = express.Router();

router
  .route("/")
  .post(cardController.createCard)
  .get(cardController.getAllCards);

router.get("/:id", cardController.getCard);

module.exports = router;
