const {
  verifyTokenAdmin,
  verifyPasswordToken,
} = require("../Middleware/verifyToken");
const OrderModel = require("../Model/OrderModel");
const router = require("express").Router();
// create
router.post("/", verifyPasswordToken, async (req, res) => {
  const order = new OrderModel(req.body);
  try {
    const saveOrder = await order.save();
    res.status(200).json(saveOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});
// update
router.put("/update/:userId", verifyPasswordToken, async (req, res) => {
  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updatedOrder);
    console.log(updatedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});
// delete
router.delete("/delete/:userId", verifyPasswordToken, async (req, res) => {
  try {
    await OrderModel.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted successfully");
  } catch (error) {
    res.status(401).json(error);
  }
});
// find card
router.get("/find", verifyPasswordToken, async (req, res) => {
  try {
    const order = new OrderModel.findOne({ userId: req.params.id });
    res.status(200).json(order);
  } catch (error) {
    res.status(401).json(error);
  }
});
// get user
router.get("/get", verifyTokenAdmin, async (req, res) => {
  try {
    const order = new OrderModel.find();
    res.status(200).json(order);
  } catch (error) {
    res.status(401).json(error);
  }
});
// get user stats
router.get("/stats", verifyTokenAdmin, async (req, res) => { });

module.exports = router
