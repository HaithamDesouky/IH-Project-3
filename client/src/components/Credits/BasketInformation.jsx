import React from 'react';

import Price from './Price';

const BasketInformation = ({ list }) => {
  const totalQuantity = list.reduce((sum, item) => sum + item.quantity, 0);
  const totalPriceAmount = list.reduce((sum, item) => {
    return sum + item.user.credits * item.quantity;
  }, 0);

  return (
    <div>
      <span>
        {'🛍'}
        {totalQuantity}
      </span>
      {'💰'}
      <Price {...totalPriceAmount} />
    </div>
  );
};

export default BasketInformation;
