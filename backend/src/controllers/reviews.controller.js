const Service = require("../models/Service");
const Client = require("../models/Client");
const Review = require("../models/Review");

const parserString = (ObjectId) => {
  return JSON.parse(JSON.stringify(ObjectId));
};

const addReview = async (req, res, next) => {
  try {
    const { id_client, id_service, content, score } = req.body;
    const service = await Service.findById(id_service);

    if (!service) throw { name: "service not found", number: 404 };

    const clients = Object.values(service.clients);
    const isClient = !clients.length
      ? null
      : await clients.find((el) => parserString(el) === id_client);

    if (!isClient) throw { name: "unauthorized", number: 301 };

    const review = new Review({
      score,
      content,
      active: true,
      from: id_client,
    });

    const addToClient = await Client.findByIdAndUpdate(
      id_client,
      { $push: { reviews: review } },
      { new: true }
    );
    const addToService = await Service.findByIdAndUpdate(
      id_service,
      { $push: { reviews: review } },
      { new: true }
    );

    const reviewSaved = await review.save();

    res.status(201).json(review);
  } catch (error) {
    next(error);
  }
};

const updateReview = async (req, res, next) => {
  try {
    const { score, content, id } = req.body;
    const reviewUpdate = await Review.findByIdAndUpdate(
      id,
      { score, content },
      { new: true }
    );

    if (!reviewUpdate) throw { name: "review not found", number: 404 };

    res.status(200).json(reviewUpdate);
  } catch (error) {
    next(error);
  }
};

const deleteReview = async (req, res, next) => {
  try {
    const { id } = req.params;
    const review = await Review.findByIdAndUpdate(
      id,
      { active: false },
      { new: true }
    );
    if (!review) throw { name: "review not found", number: 404 };
    res.status(200).json(review);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addReview,
  updateReview,
  deleteReview,
};
