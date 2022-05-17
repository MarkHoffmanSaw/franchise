const express = require("express");

const cardController = require("../controllers/cardController");
const authController = require("../controllers/authController");

const router = express.Router();

router.route("/card-categories").get(cardController.getCardCategories);

router
  .route("/")
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    cardController.createCard
  )
  .get(cardController.getAllCards);

router
  .route("/:id")
  .get(cardController.getCard)
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    cardController.updateCard
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    cardController.deleteCard
  );

module.exports = router;
