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

const singleBox = props => {
  const LootBox = props.LootBox;
  return (
    <div className="shop">
      <div className="lootbox">
        <h1>{LootBox.name}</h1>
        <img src={LootBox.picture} alt={LootBox.name} className="Lootboxpic" />
        <div className="loot_buttons">
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
        <p>{LootBox.lootType}</p>
        <p>{LootBox.priceInCredits}</p>
      </div>
    </div>
  );
};

export default singleBox;
