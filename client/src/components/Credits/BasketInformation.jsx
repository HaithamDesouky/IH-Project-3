import React from "react";

import Price from "./Price";

const BasketInformation = ({ list }) => {
  const totalQuantity = list.reduce((sum, item) => sum + item.quantity, 0);
  const totalPriceAmount = list.reduce((sum, item) => {
    return sum + item.credits.price.amount * item.quantity;
  }, 0);
  const totalPriceCurrency = list[0] ? list[0].credits.price.currency : "EUR";
  const totalPrice = {
    amount: totalPriceAmount,
    currency: totalPriceCurrency,
  };
  return (
    <div>
      <span>
        {"🛍"}
        {totalQuantity}
      </span>
      {"💰"}
      <Price {...totalPrice} />
    </div>
  );
};

export default BasketInformation;
