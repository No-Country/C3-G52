const { Router } = require("express");
const reviewRouter = Router();
const reviewController = require("../controllers/reviews.controller");

reviewRouter.post("/", reviewController.addReview);
reviewRouter.delete("/:id", reviewController.deleteReview);
reviewRouter.put("/", reviewController.updateReview);

module.exports = reviewRouter;
