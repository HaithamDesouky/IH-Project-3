import React from 'react';

const singleBox = props => {
  // const { product, basket } = props;

  console.log('props in lootbox', props.basket);
  return (
    <div className="shop">
      <div className="lootbox">
        <h1>{props.name}</h1>
        <img src={props.picture} alt={'LootBox.name'} className="Lootboxpic" />
        <div className="loot_buttons">
          <button onClick={() => props.onChangeQuantity(props.lootBox, -1)}>
            -
          </button>
          <span>{props.quantity}</span>
          <button onClick={() => props.onChangeQuantity(props.lootBox, 1)}>
            +
          </button>
        </div>
        0
        {
          <p>
            <strong>Price: </strong>
            {props.priceInCredits} credits
          </p>
        }
      </div>
    </div>
  );
};

export default singleBox;
