import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  rating: { type: Number, required: true },
  reviewMessage: { type: String, required: true },
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  reviews: [reviewSchema],
});

const user = mongoose.model("User", userSchema);

module.exports = { user };
