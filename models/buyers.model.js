const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model("Buyer", userSchema);
