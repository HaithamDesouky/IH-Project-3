const express = require('express');

const Order = require('../models/order');

const orderRouter = new express.Router();
const User = require('./../models/user');

orderRouter.post('/', (request, response, next) => {
  const { user, total, basket, userCredits } = request.body;
  console.log(request.body);
  const credits = Number(userCredits) - Number(total);
  console.log(credits);

  Order.create({
    user,
    total,
    basket
  })
    .then(() => {
      User.findByIdAndUpdate(user, {
        credits: credits
      })
        .then(data => console.log(data))
        .catch(error => console.log(error));
    })
    .then(order => {
      response.json({ order });
    })

    .catch(error => {
      console.log(error);
      next(error);
    });
});

orderRouter.get('/load', (request, response, next) => {
  const id = request.user._id;
  Order.find({ user: id })
    .then(orders => {
      response.json({ orders });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = orderRouter;
