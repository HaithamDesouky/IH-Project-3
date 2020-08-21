'use strict';

const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    name: String,
    lootType: {
      type: String,
      enum: ['Gaming', 'Anime', 'Entertainment', 'Event']
    },
    itemType: {
      type: String,
      enum: ['Clothing', 'Toys', 'Misc', 'Special']
    },
    picture: String
  },
  {
    timestamps: {
      createdAt: 'creationDate'
    }
  }
);

module.exports = mongoose.model('Item', itemSchema);
