const router = require("express").Router();
const User = require("../Model/UserModel");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
// Register
router.post("/createUser", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: cryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
  });
  try {
    const userCreated = await newUser.save();
    console.log(userCreated);
    res.status(201);
    res.json(userCreated);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.json(error);
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
if(!user){
  return res.status(401).json("user not found")
}
    const hashedPassword = cryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    console.log(user)
    const accessToken = jwt.sign(
      { id: user.id, isAdmin: user.isAdmin },
      process.env.jwt_SEC,{expiresIn:"3d"}
    );
    const originalPassword = hashedPassword.toString(cryptoJS.enc.Utf8);
    const inputPassword = req.body.password;
    if (originalPassword !== inputPassword ) {
      res.status(401).json("Wrong cridentials");
    } else {
      const { password, ...others } = user._doc;
      console.log(others);
       res.status(201).json({...others,accessToken});
    }
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});
module.exports = router;

