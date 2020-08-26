'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    address: String,
    total: Number,
    basket: [
      {
        lootBox: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'LootBox'
        },
        quantity: Number
      }
    ]
  },
  {
    timestamps: {
      createdAt: 'creationDate',
      updatedAt: 'editDate'
    }
  }
);

module.exports = mongoose.model('Order', schema);
