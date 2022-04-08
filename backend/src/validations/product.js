const Joi = require("joi");

module.exports = (body) => {
  const Schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(10).max(200).required(),
    category: Joi.string().min(3).max(30).required(),
    brand: Joi.string().min(2).max(20).required(),
    image: Joi.string().required(),
    price: Joi.number().required(),
    rating: Joi.number().min(0).max(10),
    numReviews: Joi.number(),
    countInStock: Joi.number().min(0).max(10000),
  });
  return Schema.validate(body);
};
