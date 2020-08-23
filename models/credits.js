"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  picture: String,
  price: {
    amount: Number,
    currency: {
      type: String,
      enum: ["EUR"],
    },
  },
});

module.exports = mongoose.model("Credits", schema);
