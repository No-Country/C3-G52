const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  avatar: String,
  name: String,
  score: Number,
  content: String,
  active: Boolean,
  from: {
    type: Schema.Types.ObjectId,
    ref: "Client",
  },
});

reviewSchema.set("toJSON", {
  transform: (doc, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Review = model("Review", reviewSchema);

module.exports = Review;
