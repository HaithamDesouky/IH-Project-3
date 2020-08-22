const express = require('express');

const Item = require('../models/itemModel');

const routeAuthenticationGuard = require('../middleware/route-authentication-guard');

const multer = require('multer');
const cloudinary = require('cloudinary');
const multerStorageCloudinary = require('multer-storage-cloudinary');

const itemRouter = new express.Router();
const roleRouteGuard = require('../middleware/roleRouteGuard');

const storage = new multerStorageCloudinary.CloudinaryStorage({
  cloudinary: cloudinary.v2
});
const upload = multer({ storage });

itemRouter.get('/list', roleRouteGuard(), (request, response, next) => {
  console.log('running');
  Item.find()
    .then(items => {
      console.log(items);
      response.json({ items });
    })
    .catch(error => {
      next(error);
    });
});

itemRouter.get('/:id', async (request, response, next) => {
  const id = request.params.id;
  try {
    const item = await Item.findById(id).populate('creator');
    if (item) {
      response.json({ item });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
});

itemRouter.post(
  '/',
  routeAuthenticationGuard,
  roleRouteGuard(),
  upload.single('photo'),
  (request, response, next) => {
    let url;
    if (request.file) {
      url = request.file.path;
    }
    console.log('req body', request.body);

    const { name, description, itemType } = request.body;
    console.log(url, request.file);
    Item.create({
      name,
      description,
      itemType,
      photo: url
    })
      .then(item => {
        response.json({ item });
      })
      .catch(error => {
        next(error);
      });
  }
);

itemRouter.delete(
  '/:id',
  routeAuthenticationGuard,
  async (request, response, next) => {
    const id = request.params.id;

    Item.findOneAndDelete({ _id: id, creator: request.user._id })
      .then(() => {
        response.json({});
      })
      .catch(error => {
        next(error);
      });
  }
);

itemRouter.patch(
  '/:id',
  routeAuthenticationGuard,
  (request, response, next) => {
    const id = request.params.id;

    Item.findOneAndUpdate(
      { _id: id, creator: request.user._id },
      { content: request.body.content },
      { new: true }
    )
      .then(item => {
        response.json({ item });
      })
      .catch(error => {
        next(error);
      });
  }
);

module.exports = itemRouter;
