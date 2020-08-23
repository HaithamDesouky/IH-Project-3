import React from "react";

const CreditsPrice = ({ amount, currency }) => {
  const currencyIcons = {
    EUR: "€",
  };
  const symbol = currencyIcons[currency];

  return (
    <span className="creditsprice">{`${(amount / 100).toFixed(
      2
    )}${symbol}`}</span>
  );
};

export default CreditsPrice;
