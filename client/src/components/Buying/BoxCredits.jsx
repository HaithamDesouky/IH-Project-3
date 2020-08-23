import React from "react";

const BoxCredits = ({ amount }) => {
  return <span className="boxprice">{`${amount.toFixed(2)}`}</span>;
};

export default Price;
