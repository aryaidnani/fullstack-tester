const { userDataModel } = require("./db");
const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:MS10DwmRLt0BWiru@cluster0.nstku.mongodb.net/fullstack-demo"
);

const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/", (req, res) => {
  let userName = req.body.userName;
  let userId;

  userDataModel.create({
    userId: userId,
    userName: userName,
  });

  res.json({
    message: "User Created Successfully!",
    userId: userId,
    userName: userName,
  });
});

app.get("/", async (req, res) => {
  const userName = req.body.userName;
  const foundUser = await userDataModel.find({ userName: userName });

  res.json({
    foundUser,
  });
});

app.listen(443);
