const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    product: [
      {
        productID: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
    address: {
      type: object,
      require: true,
    },
    amount: {
      type: Number,
      require: true,
    },
    status: {
      type: String,
      default: "pending...",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order", orderSchema);
