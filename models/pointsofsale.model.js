const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  manager: {
    type: String,
    required: true,
  },
  address: {
    type: Number | String,
    required: true,
  },
})

module.exports = mongoose.model("Point of sale", userSchema);
