const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const Order = model(
  "Order",
  new Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      orderitems: [
        {
          name: { type: String, required: true },
          quantity: { type: Number, required: true },
          image: { type: String, required: true },
          price: { type: Number, required: true },
          _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Product",
          },
        },
      ],

      isDeliverd: {
        type: Boolean,
        default: false,
      },

      isPayment: {
        type: String,
        enum: ["false", "true", "cash"],
        default: "false",
      },
      status: {
        type: String,
        enum: ["pending", "accept", "canncel"],
        default: "pending",
      },
      taxPrice: {
        type: Number,
        default: 0.0,
      },
      shippingPrice: {
        type: Number,
        required: true,
      },
      totalPrice: {
        type: Number,
        required: true,
      },
    },
    { timestamps: true }
  )
);
module.exports = Order;
