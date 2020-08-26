'use strict';

const { Router } = require('express');
const router = new Router();
const Credits = require('../models/credits');

router.get('/', (req, res, next) => {
  Credits.find()
    .then(credits => {
      res.json({ credits });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
