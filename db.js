const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userData = new Schema({
  userId: Number,
  userName: String,
});

const userDataModel = mongoose.model("users", userData);

module.exports = {
  userDataModel,
};
