// import React from "react";

// import Price from "./Price";

// const CreditsPack = (props) => {
//   const { credits, basket } = props;
//   const existingItem = basket.find((item) => item.credits._id === credits._id);
//   const quantity = existingItem ? existingItem.quantity : 0;
//   return (
//     <div key={props.credits._id} className="product-item">
//       <img src={props.credits.picture} alt={props.credits.name} />
//       <div className="details">
//         <strong>{props.credits.name}</strong>
//       </div>
//       <Price {...props.credits.price} />
//       <div className="actions">
//         <button onClick={() => props.onChangeQuantity(props.credits, 1)}>
//           +
//         </button>
//         <span>{quantity}</span>
//         <button onClick={() => props.onChangeQuantity(props.credits, -1)}>
//           -
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CreditsPack;
