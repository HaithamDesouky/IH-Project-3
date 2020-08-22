const express = require('express');

const Post = require('./../models/post');

const routeAuthenticationGuard = require('./../middleware/route-authentication-guard');

const multer = require('multer');
const cloudinary = require('cloudinary');
const multerStorageCloudinary = require('multer-storage-cloudinary');

const postRouter = new express.Router();

const storage = new multerStorageCloudinary.CloudinaryStorage({
  cloudinary: cloudinary.v2
});
const upload = multer({ storage });

postRouter.get('/list', (request, response, next) => {
  Post.find()
    .populate('creator')
    .then(posts => {
      response.json({ posts });
    })
    .catch(error => {
      next(error);
    });
});

postRouter.get('/:id', async (request, response, next) => {
  const id = request.params.id;
  try {
    const post = await Post.findById(id).populate('creator');
    if (post) {
      response.json({ post });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
});

postRouter.post(
  '/',
  routeAuthenticationGuard,
  upload.single('photo'),
  (request, response, next) => {
    let url;
    if (request.file) {
      url = request.file.path;
    }

    Post.create({
      creator: request.user._id,
      content: request.body.content,
      photo: url
    })
      .then(post => {
        response.json({ post });
      })
      .catch(error => {
        next(error);
      });
  }
);

postRouter.delete(
  '/:id',
  routeAuthenticationGuard,
  async (request, response, next) => {
    const id = request.params.id;

    Post.findOneAndDelete({ _id: id, creator: request.user._id })
      .then(() => {
        response.json({});
      })
      .catch(error => {
        next(error);
      });
  }
);

postRouter.patch(
  '/:id',
  routeAuthenticationGuard,
  (request, response, next) => {
    const id = request.params.id;

    Post.findOneAndUpdate(
      { _id: id, creator: request.user._id },
      { content: request.body.content },
      { new: true }
    )
      .then(post => {
        response.json({ post });
      })
      .catch(error => {
        next(error);
      });
  }
);

module.exports = postRouter;
