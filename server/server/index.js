const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./Router/user");
const createuserRouter = require("./Router/auth");
const productRouter = require("./Router/product");
const cartRouter = require("./Router/cart");
const cors = require("cors")
app.use(express.json());
dotenv.config();
app.use(cors())
app.use('/cart', cartRouter)
app.use("/product", productRouter);
app.use("/user", userRouter);
app.use("/Register", createuserRouter);
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("dB connected"))
  .catch((e) => console.log(e));
app.listen(process.env.PORT || 9999, () => {
  console.log("backend is working", process.env.PORT || 9999);
});
