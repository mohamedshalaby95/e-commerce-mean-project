const Joi = require("joi");

module.exports = (body) => {
  const Schema = Joi.object({
    firstName: Joi.string().alphanum().min(3).max(30).required(),
    lastName: Joi.string().alphanum().min(3).max(30).required(),

    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    isAdmin: Joi.boolean(),

    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    shippingAdress: {
      address: Joi.string(),
      country: Joi.string(),
      city: Joi.string(),
      mobile: Joi.string(),
      postCode: Joi.string(),
    },
  });
  return Schema.validate(body);
};
