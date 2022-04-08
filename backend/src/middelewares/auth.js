const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    try {
      const decode = jwt.verify(token, process.env.SECERT_TOKEN);

      req.user = decode;

      next();
    } catch (err) {
      res.status(401).send("Not autherized or No token");
    }
  }
  if (!token) {
    res.status(401).send("Not autherized");
  }
};
