const Joi = require("joi");

module.exports = (body) => {
  const Schema = Joi.object({
    user: Joi.object({
      _id: Joi.string().required(),
      isAdmin: Joi.boolean(),
      iat: Joi.number(),
    }),
    orderitems: Joi.array().items({
      name: Joi.string(),
      quantity: Joi.number().min(1),
      image: Joi.string(),
      price: Joi.number(),
      _id: Joi.string().required(),
    }),
    isDeliverd: Joi.boolean(),
    isPayment: Joi.string(),
    shippingPrice: Joi.number().required(),
    totalPrice: Joi.number().required(),
  });
  return Schema.validate(body);
};
