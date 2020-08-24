const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },

    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    },
    imagePath: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Comment', commentSchema);
