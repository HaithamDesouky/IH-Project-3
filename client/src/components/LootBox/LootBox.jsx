import React from 'react';

const LootBox = props => {
  // const { product, basket } = props;

  const { lootBox, basket } = props;
  const existingLootBox = basket.find(item => item.lootBox._id === lootBox._id);
  const quantity = existingLootBox ? existingLootBox.quantity : 0;
  return (
    <div key={props.lootBox._id} className="lootbox">
      <h1>{props.lootBox.name}</h1>
      <img
        src={props.lootBox.picture}
        alt={'LootBox.name'}
        className="Lootboxpic"
      />
      <div className="loot_buttons">
        <button onClick={() => props.onChangeQuantity(props.lootBox, -1)}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => props.onChangeQuantity(props.lootBox, 1)}>
          +
        </button>
      </div>

      {
        <p>
          <strong>Price: </strong>
          {quantity > 0
            ? props.lootBox.priceInCredits.amount * quantity
            : props.lootBox.priceInCredits.amount}{' '}
          credits
        </p>
      }
    </div>
  );
};

export default LootBox;
