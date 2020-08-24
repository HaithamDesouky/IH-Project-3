"use strict";

const { Router } = require("express");
const router = new Router();
const Credits = require("../models/credits");
const Order = require("../models/order");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/order", (req, res, next) => {
  const { address, token, basket } = req.body;
  const creditsIds = basket.map((item) => item.creditsId);

  let total;

  // Loading all credits on wallet
  Credits.find({ _id: creditsIds })
    .then((credits) => {
      // Calculating total price
      const amount = basket.reduce((sum, item) => {
        const pcredits = pcredits.find(
          (prod) => prod._id.toString() === item.creditsId
        );
        return sum + credits.price.amount * item.quantity;
      }, 0);
      const currency = credits[0].price.currency;
      total = {
        amount,
        currency,
      };
      // Make charge to payment method

      return stripe.charges.create({
        amount: total.amount,
        currency: total.currency,
        source: token,
        description: "Purchase of Credits",
      });
    })
    .then((charge) => {
      // Create an order document
      return Order.create({
        address,
        total,
        charge: charge.id,
        basket: basket.map((item) => ({ ...item, credits: item.creditsId })),
      });
    })
    .then((order) => {
      // We're done, send order object to client
      res.json({ order });
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

module.exports = router;
