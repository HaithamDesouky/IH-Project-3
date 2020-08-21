'use strict';

const { Router } = require('express');
const router = new Router();
const routeAuthenticationGuard = require('./../middleware/route-authentication-guard');

router.get('/', (req, res, next) => {
  res.json({ type: 'success', data: { title: 'Hello World' } });
});

router.get('/private', routeAuthenticationGuard, (req, res, next) => {
  res.json({});
});

module.exports = router;
