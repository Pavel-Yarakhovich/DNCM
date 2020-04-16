const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema({
  name: String,
  address: String,
  comment: String,
  served: Boolean,
});

module.exports = mongoose.model("Request", requestSchema);