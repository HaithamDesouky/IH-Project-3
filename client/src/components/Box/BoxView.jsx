// import React from 'react';
// import { Link } from 'react-router-dom';
// import './style.scss';
// import defaultPhoto from './default.png';

// const BoxView = ({ name, lootType, priceInCredits, picture }) => {
//   return (
//     <Link to={`/shop`} className="box">
//       {(picture && <img src={picture} alt={lootType} />) || (
//         <img src={defaultPhoto} alt={LootType} />
//       )}
//       <div>
//         <strong>{name}</strong>
//         <p>{LootType}</p>
//         <p>{priceInCredits}</p>
//       </div>
//     </Link>
//   );
// };

// export default BoxView;

import React from 'react';

const lootBoxes = props => {
  const { LootBox, basket } = props;
  const existingItem = basket.find(item => item.LootBox._id === LootBox._id);
  const quantity = existingItem ? existingItem.quantity : 0;
  return (
    <div key={props.LootBox._id} className="lootBox">
      <img src={props.LootBox.picture} alt={props.LootBox.name} />
      <div className="details">
        <strong>{props.LootBox.name}</strong>
        <small>Type: {props.LootBox.lootType}</small>
        <h4>{props.LootBox.priceInCredits}</h4>
      </div>
    </div>
  );
};

export default lootBoxes;
