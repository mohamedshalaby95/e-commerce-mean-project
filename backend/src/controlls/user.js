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
    _.pick(req.body, ["firstName", "lastName", "email", "password","isAdmin"])
  );
  user = await user.save();
  

  const token=user.generatetoken()
  user=_.pick(user,["firstName","lastName","isAdmin"])
 
  res.send({...user,token})


}

async function updateUser(req, res) {
 

  const { error } = userValidation(req.body);

  if (error) {
    
      res.status(404)
    throw new Error(`${error.details[0].message}`);
    
  }

  let user = await userModel.findOne({ email: req.body.email });

  if (user && user._id != req.params.id) {
    res.status(401);
    throw new Error(`This Email is Registed`);
  
  }


  user = await userModel.findByIdAndUpdate(req.params.id, {
    $set: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    },
  });
  user = await user.save();
  const token=user.generatetoken()
  user=_.pick(user,["firstName","lastName","isAdmin"])
 
  res.send({...user,token})
}
module.exports = { addUser, updateUser };
