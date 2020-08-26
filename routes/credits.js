'use strict';

const { Router } = require('express');
const creditsRouter = new Router();
const User = require('../models/user');
const CreditsOrder = require('../models/creditsOrder');

const stripe = require('stripe')(
  'sk_test_516xd9kHBGALjgD8KeLZTsVXkJSEFY0TAGrf8YcUQP0cgVmh2RbhPEpPuk4lQcRTcNqiP2uNXbhYqgyzrUyWtujT300iJ1j6Mur'
);

creditsRouter.post('/buy', (req, res, next) => {
  const { credits, token, address } = req.body;
  const user = req.user;

  User.findByIdAndUpdate(user._id, {
    credits: Number(user.credits) + Number(credits)
  })
    .then(() => {
      return stripe.charges.create({
        amount: credits * 10,
        currency: 'EUR',
        source: token,
        description: 'Credits Purchased'
      });
    })
    .then(charge => {
      console.log(charge, 'logging charge');
      // Create an order document
      return CreditsOrder.create({
        address,
        credits,
        charge: charge.id,
        user: user._id
      });
    })
    .then(order => {
      // We're done, send order object to client
      res.json({ order });
    })
    .catch(error => {
      console.log(error);
      next(error);
    });
});

module.exports = creditsRouter;

//   // Loading all credits on wallet
//   User.findById(user)
//     .then(credits => {
//
//       // Make charge to payment method

//       return stripe.charges.create({
//         amount: total.amount,
//         currency: total.currency,
//         source: token,
//         description: 'Purchase of Credits'
//       });
//     })
//     .then(charge => {
//       // Create an order document
//       return Order.create({
//         address,
//         total,
//         charge: charge.id,
//         basket: basket.map(item => ({ ...item, credits: item.creditsId }))
//       });
//     })
//     .then(order => {
//       // We're done, send order object to client
//       res.json({ order });
//     })
//     .catch(error => {
//       console.log(error);
//       next(error);
//     });
