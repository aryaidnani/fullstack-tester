const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userData = new Schema({
  userName: String,
});

const userModel = mongoose.model("users", userData);

module.exports = {
  userModel,
};
