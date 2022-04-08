const authValidation = require("../validations/auth");
const userModel = require("../models/user");
const _ = require("lodash");

const bycrpt = require("bcrypt");

async function login(req, res) {
  const { error } = authValidation(req.body);
  if (error) {
    res.status(401);
    throw new Error(`${error.details[0].message}`);
  }

  let user = await userModel.findOne({ email: req.body.email });
  if (!user) {
    res.status(400);
    throw new Error(`the email or password not valid `);
  }

  const password = await bycrpt.compare(req.body.password, user.password);

  if (!password) {
    res.status(400);
    throw new Error(`the email or password not valid `);
  }
  const token = user.generatetoken();
  user = _.pick(user, ["firstName", "lastName", "isAdmin", "email"]);

  res.send({ ...user, token });
}

module.exports = { login };
