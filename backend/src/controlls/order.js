const orderValidation = require("../validations/oder");
const Order = require("../models/order");
const _ = require("lodash");
var mongoose = require("mongoose");

async function addOrder(req, res) {
  const { error } = orderValidation({ ...req.body, user: req.user });
  if (error) {
    res.status(400);
    throw new Error(`${error.details[0].message}`);
  }

  let order = new Order({
    user: req.user,
    ..._.pick(req.body, [
      "orderitems",
      "isDeliverd",
      "isPayment",
      "status",
      "shippingPrice",
      "totalPrice",
    ]),
  });
  order = await order.save();
  res.json(order._id);
}
async function getOrdersAdmin(req, res) {
  const orders = await Order.find().populate("user", "email shippingAddress");
  res.json(orders);
}

async function getOrdersUser(req, res) {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
}
async function getOrder(req, res) {
  if (mongoose.isValidObjectId(req.params.id)) {
    const order = await Order.findById({ _id: req.params.id }).populate(
      "user",
      "email shippingAddress"
    );
    if (order) {
      res.json(order);
    } else {
      res.status(404).send("This order not found");
    }
  } else {
    res.status(400).send(" something go wrong");
  }
}

async function deleteOrder(req, res) {
  if (mongoose.isValidObjectId(req.params.id)) {
    const order = await Order.findByIdAndDelete({ _id: req.params.id });
    if (order) {
      res.json(order);
    } else {
      res.status(404).send("This order not found");
    }
  } else {
    res.status(400).send(" something go wrong");
  }
}

async function getPendingOrdersAdmin(req, res) {
  const orders = await Order.find({ status: "pending" }).populate(
    "user",
    "email shippingAddress"
  );
  res.json(orders);
}

async function updateStatusOrder(req, res) {
  const order = await Order.findByIdAndUpdate(
    req.body.id,
    {
      $set: {
        status: req.body.status,
      },
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.send(order._id);
}

async function updatePaymentOrder(req, res) {

  const order = await Order.findByIdAndUpdate(
    req.body.id,
    {
      $set: {
        isPayment: req.body.payment,
      },
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.send(order._id);
}

module.exports = {
  addOrder,
  getOrdersAdmin,
  getOrdersUser,
  getOrder,
  deleteOrder,
  getPendingOrdersAdmin,
  updateStatusOrder,
  updatePaymentOrder,
};
