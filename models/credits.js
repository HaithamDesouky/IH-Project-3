"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  picture: String,
  price: {
<<<<<<< HEAD
    amount: Number,
    currency: {
      type: String,
      enum: ["EUR"],
    },
  },
=======
    amount: Number
  }
>>>>>>> d16ce218b0dea3354f9042a892742b01b4a489f7
});

module.exports = mongoose.model("Credits", schema);
