'use strict';

const mongoose = require('mongoose');

const lootBoxSchema = new mongoose.Schema(
  {
    name: String,
    example: {
      type: Boolean,
      default: false
    },
    lootType: {
      type: String,
      enum: ['Gaming', 'Anime', 'Entertainment', 'Mystery']
    },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
    picture: String,
    priceInCredits: {
      amount: Number
    }
  },
  {
    timestamps: {
      createdAt: 'creationDate'
    }
  }
);

module.exports = mongoose.model('LootBox', lootBoxSchema);
