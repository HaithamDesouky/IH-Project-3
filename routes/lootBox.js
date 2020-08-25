'use strict';

const { Router } = require('express');
const lootBoxRouter = new Router();
const LootBox = require('../models/lootBox');

lootBoxRouter.get('/', (req, res, next) => {
  LootBox.find({ example: true })
    .then(lootBox => {
      res.json({ lootBox });
    })
    .catch(error => {
      next(error);
    });
});

// lootBox.post(
//   '/',
//   routeAuthenticationGuard,
//   (request, response, next) => {

//     Order.create({
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

module.exports = lootBoxRouter;
