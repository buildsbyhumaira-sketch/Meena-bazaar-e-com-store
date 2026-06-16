const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  const headerAuth = req.headers.token;
  if (headerAuth) {
    const token = headerAuth.split(" ")[1];
    console.log(token);
    jwt.verify(token, process.env.jwt_SEC, (err, user) => {
      if (err) {
        res.status(401).json("wrong token!");
      }
      req.user = user;
      console.log(req.user);
      next();
    });
  } else {
res.status(401).json("error token!");
  }
};
const verifyPasswordToken = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id == req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(401).json("you are not authorized");
    }
  });
};
const verifyTokenAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(401).json("you are not authorized as admin");
    }
  });
};
module.exports = { verifyPasswordToken, verifyToken ,verifyTokenAdmin};
