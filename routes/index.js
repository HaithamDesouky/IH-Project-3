const express = require('express');

const routeAuthenticationGuard = require('../middleware/route-authentication-guard');

const router = new express.Router();
const roleRouteGuard = require('../middleware/roleRouteGuard');

router.get(
  '/admin',
  routeAuthenticationGuard,
  roleRouteGuard(),
  (request, response, next) => {
    console.log('youre in the admin router');
  }
);

module.exports = router;
