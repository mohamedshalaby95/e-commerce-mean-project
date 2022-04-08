const userValidation = require("../validations/user");
const userModel = require("../models/user");
const _ = require("lodash");

async function addUser(req, res, next) {
  const { error } = userValidation(req.body);

  if (error) {
    res.status(401);
    throw new Error(`${error.details[0].message}`);
  }

  let user = await userModel.findOne({ email: req.body.email });
  if (user) {
    res.status(401);
    throw new Error(`This Email is Registed`);
  }

  user = new userModel(
    _.pick(req.body, [
      "firstName",
      "lastName",
      "email",
      "password",
      "isAdmin",
      "shippingAddress",
    ])
  );
  user = await user.save();

  const token = user.generatetoken();
  user = _.pick(user, ["firstName", "lastName", "isAdmin", "email"]);

  res.send({ ...user, token });
}

async function updateUser(req, res) {
  let user = await userModel.findOne({ email: req.body.email });

  user = await userModel.findByIdAndUpdate(
    { _id: req.user._id },
    {
      $set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        shippingAddress: {
          address: req.body.shippingAddress.address,
          country: req.body.shippingAddress.country,
          city: req.body.shippingAddress.city,
          mobile: req.body.shippingAddress.mobile,
          postCode: req.body.shippingAddress.postCode,
        },
      },
    },
    { new: true }
  );
  user = await user.save();

  const token = user.generatetoken();
  user = _.pick(user, [
    "firstName",
    "lastName",
    "isAdmin",
    "email",
    "shippingAddress",
  ]);

  res.send({ ...user, token });
}
module.exports = { addUser, updateUser };
