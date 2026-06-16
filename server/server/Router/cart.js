const { verifyTokenAdmin, verifyPasswordToken } = require("../Middleware/verifyToken");
const cartModel = require("../Model/Cartmodel");
const cryptoJS = require("crypto-js");
const router = require("express").Router();
// create
router.post("/", verifyPasswordToken, async (req, res) => {
  const cart = new cartModel(req.body);
  try {
    const saveCart = await cart.save();
    res.status(200).json(saveCart);
  } catch (error) {
    res.status(500).json(error);
  }
});
// update
router.put("/update/:userId", verifyPasswordToken, async (req, res) => {
  try {
    const updatedCart = await cartModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updatedCart);
    console.log(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});
// delete
router.delete("/delete/:userId", verifyPasswordToken, async (req, res) => {
  try {
    await cartModel.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted successfully");
  } catch (error) {
    res.status(401).json(error);
  }
});
// find card
router.get("/find", verifyPasswordToken, async (req, res) => {
  try {
    const cart = new cartModel.findOne({ userId: req.params.id });
    res.status(200).json(cart);
  } catch (error) {
    res.status(401).json(error);
  }
});
// get user
router.get("/get", verifyTokenAdmin, async (req, res) => {
  try {
    const cart = new cartModel.find()
    res.status(200).json(cart);
  } catch (error) {
    res.status(401).json(error);
  }
});

module.exports = router