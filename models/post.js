const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    liked: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    content: {
      type: String,
      minlength: 3,
      maxlength: 280,
      required: true
    },
    photo: {
      type: String
    }
  },
  {
    timestamps: {
      createdAt: 'creationDate',
      updatedAt: 'editDate'
    }
  }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
