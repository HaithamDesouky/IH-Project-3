'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  picture: String,
  price: {
<<<<<<< HEAD
    amount: Number
=======
    amount: Number,
    currency: {
      type: String,
      enum: ['EUR']
    }
>>>>>>> 1377f4bc76ef9a1980b617420037c5fecd9f5272
  }
});

module.exports = mongoose.model('Credits', schema);
