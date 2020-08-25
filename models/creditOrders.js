'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  belongsToWallet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  address: String,
  total: {
    amount: Number,
    currency: {
      type: String,
      enum: ['Credits']
    }
  },
  basket: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Credits'
      },
      quantity: Number
    }
  ],
  charge: String
});

module.exports = mongoose.model('Order', schema);
