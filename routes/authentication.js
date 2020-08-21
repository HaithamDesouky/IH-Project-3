'use strict';

const { Router } = require('express');

const passport = require('passport');

const authenticationRouter = new Router();
const multer = require('multer');
const cloudinary = require('cloudinary');
const multerStorageCloudinary = require('multer-storage-cloudinary');
const User = require('./../models/user');
const storage = new multerStorageCloudinary.CloudinaryStorage({
  cloudinary: cloudinary.v2
});

const upload = multer({ storage });

authenticationRouter.post(
  '/sign-up',
  // upload.single('photo'),
  passport.authenticate('local-sign-up', {
    successRedirect: '/',
    failureRedirect: '/sign-up'
  })
);

authenticationRouter.post(
  '/me',
  passport.authenticate('local-sign-up', {
    successRedirect: '/',
    failureRedirect: '/sign-up'
  })
);

authenticationRouter.get('/me', (request, response) => {
  const user = request.user;
  response.json({ user });
});

// authenticationRouter.post(
//   '/sign-up',
//   passport.authenticate('github', {
//     successRedirect: '/private',
//     failureRedirect: '/sign-up'
//   })
// );

authenticationRouter.post(
  '/sign-in',
  // upload.single('photo'),
  passport.authenticate('local-sign-in', {
    successRedirect: '/private',
    failureRedirect: '/sign-in'
  })
);

// authenticationRouter.get(
//   '/github',
//   passport.authenticate('github', {
//     successRedirect: '/private',
//     failureRedirect: '/authentication/sign-in'
//   })
// );

// authenticationRouter.get(
//   '/github-callback',
//   passport.authenticate('github', {
//     successRedirect: '/private',
//     failureRedirect: '/authentication/sign-in'
//   })
// );

authenticationRouter.post('/sign-out', (req, res, next) => {
  req.logout();
  res.json({});
});

module.exports = authenticationRouter;
