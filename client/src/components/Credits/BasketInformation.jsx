import React from 'react';
import { createOrder } from './../../services/order';

import { Link } from 'react-router-dom';

const BasketInformation = ({ basket, user }) => {
  function handleFormSubmission(event) {
    event.preventDefault();
    const id = user._id;
    const order = {
      user: id,
      total: totalPriceAmount,
      basket: [...basket],
      userCredits: user.credits
    };
    createOrder(order)
      .then(order => console.log(order))
      .catch(error => console.log(error));
  }

  const totalQuantity = basket.reduce((sum, item) => sum + item.quantity, 0);
  const totalPriceAmount = basket.reduce((sum, item) => {
    return sum + item.lootBox.priceInCredits.amount * item.quantity;
  }, 0);

  console.log('totalPriceAmount: ', totalPriceAmount);

  return (
    <div>
      <span>
        {'🛍'}
        {totalQuantity}
      </span>
      {'💰'}
      {totalPriceAmount}

      {user.credits < totalPriceAmount ? (
        <Link to="/buy-credits">
          {' '}
          Unfortunately you don't have enough credits for this purchase. Follow
          the link to buy more credits
        </Link>
      ) : (
        <form onSubmit={handleFormSubmission}>
          <button>Purchase</button>
        </form>
      )}
    </div>
  );
};

export default BasketInformation;
