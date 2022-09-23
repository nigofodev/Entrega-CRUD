const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  tittle: {
    type: String,
    required: true,
  },
  year: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model("Books", userSchema);
