const express = require('express');

const User = require('./../models/user');

const routeAuthenticationGuard = require('./../middleware/route-authentication-guard');

const multer = require('multer');
const cloudinary = require('cloudinary');
const multerStorageCloudinary = require('multer-storage-cloudinary');

const userRouter = new express.Router();

const storage = new multerStorageCloudinary.CloudinaryStorage({
  cloudinary: cloudinary.v2
});
const upload = multer({ storage });

// userRouter.get('/list', (request, response, next) => {
//   User.find()
//     .populate('creator')
//     .then(posts => {
//       response.json({ posts });
//     })
//     .catch(error => {
//       next(error);
//     });
// });

userRouter.get('/:id', async (request, response, next) => {
  const id = request.params.id;
  try {
    const user = await User.findById(id);
    if (user) {
      response.json({ user });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
});

// userRouter.post(
//   '/',
//   routeAuthenticationGuard,
//   upload.single('photo'),
//   (request, response, next) => {
//     let url;
//     if (request.file) {
//       url = request.file.path;
//     }

//     Post.create({
//       creator: request.user._id,
//       content: request.body.content,
//       photo: url
//     })
//       .then(post => {
//         response.json({ post });
//       })
//       .catch(error => {
//         next(error);
//       });
//   }
// );

// userRouter.delete(
//   '/:id',
//   routeAuthenticationGuard,
//   async (request, response, next) => {
//     const id = request.params.id;

//     Post.findOneAndDelete({ _id: id, creator: request.user._id })
//       .then(() => {
//         response.json({});
//       })
//       .catch(error => {
//         next(error);
//       });
//   }
// );

// userRouter.patch(
//   '/:id',
//   routeAuthenticationGuard,
//   (request, response, next) => {
//     const id = request.params.id;

//     User.findOneAndUpdate(
//       { _id: id, creator: request.user._id },
//       { content: request.body.content },
//       { new: true }
//     )
//       .then(post => {
//         response.json({ post });
//       })
//       .catch(error => {
//         next(error);
//       });
//   }
// );

module.exports = userRouter;
