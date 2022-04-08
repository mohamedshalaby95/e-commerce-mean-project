const { Schema, model } = require("mongoose");

const Product = model(
  "Product",
  new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },

      category: {
        type: String,
        required: true,
      },
      brand: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      rating: {
        type: Number,
        default: 0,
      },

      countInStock: {
        type: Number,
        default: 0,
      },
    },
    { timestamps: true }
  )
);
module.exports = Product;
