const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    des: {
      type: String,
      require: true,
      unique: true,
    },
    img: { type: String, require: true, unique: true },
    categories: { type: Array },
    price: { type: String },
    inStock: Number,
    rating: { type: Number, default: 0 },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", productSchema);
