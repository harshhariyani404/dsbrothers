import mongoose from "mongoose";

const DiamondSchema = new mongoose.Schema({
  name: String,
  shape: String,
  carat: Number,
  clarity: String,
  color: String,
  cut: String,
  price: Number,
  certificate: String,
  image: String
});

export default mongoose.model("Diamond", DiamondSchema);
