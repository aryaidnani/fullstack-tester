const cors = require("cors");
const express = require("express");
const { userModel } = require("./db");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:MS10DwmRLt0BWiru@cluster0.nstku.mongodb.net/fullstack-demo"
);

app.use(cors());
app.use(express.json());

app.post("/posts", (req, res) => {
  const userName = req.body.userName;

  userModel.create({
    userName: userName,
  });

  res.json({
    message: "User successfully created!",
    user: userModel.userName,
  });
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
