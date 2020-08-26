const express = require('express');

const Order = require('../models/order');

const orderRouter = new express.Router();
const User = require('./../models/user');

orderRouter.post('/', (request, response, next) => {
  const { user, total, basket, userCredits } = request.body;

  const credits = Number(userCredits) - Number(total);
  // const id = basket.lootBox._id;
  // const quantity = basket.lootBox.quantity;

  console.log('hey basket', basket);

  // let array = [];

  // for (let item of basket) {
  //   array.push({ id: item.lootBox._id, quantity: item.quantity });
  // }
  // console.log('lmap', array);
  Order.create({
    user,
    total,
    basket
  })
    .then(data => {
      console.log(data);
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
    .populate({
      path: 'basket.lootBox',
      model: 'LootBox'
    })
    .then(orders => {
      console.log(orders);
      response.json({ orders });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = orderRouter;
