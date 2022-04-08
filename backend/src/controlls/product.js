const ProductModel = require("../models/product");
const productValidation = require("../validations/product");
const _ = require("lodash");

async function addProduct(req, res, next) {
  const { error } = productValidation(req.body);
  if (error) {
    res.status(400);
    throw new Error(`${error.details[0].message}`);
  }

  let product = await ProductModel(
    _.pick(req.body, [
      "name",
      "description",
      "category",
      "brand",
      "image",
      "price",
      "rating",
      "countInStock",
    ])
  ).save();
  res.json(product);
}

async function getProducts(req, res) {
  const products = await ProductModel.find();

  res.json(products);
}
////////////////////////////////////////////

async function getProductsByCategory(req, res) {
  const products = await ProductModel.find({ category: req.params.category });

  res.json(products);
}
///////////////////////////////////

async function getProduct(req, res) {
  const product = await ProductModel.findById({ _id: req.params.id });

  if (!product) {
    res.status(400);
    throw new Error(`This product not found`);
  }

  res.json(product);
}
async function deleteProduct(req, res) {
  const product = await ProductModel.findByIdAndDelete({ _id: req.params.id });

  if (!product) {
    res.status(404);
    throw new Error(`This product not found`);
  }

  res.json(product._id);
}
async function updateProduct(req, res) {
  const { error } = productValidation(req.body);
  const mongoose = require("mongoose");

  if (error) {
    res.status(400);
    throw new Error(`${error.details[0].message}`);
  }

  const product = await ProductModel.findByIdAndUpdate(
    req.params.id,

    {
      $set: {
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        image: req.body.image,
        rating: req.body.rating,
        countInStock: req.body.countInStock,
        brand: req.body.brand,
      },
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.json(product);
}
module.exports = {
  addProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  getProductsByCategory,
};
