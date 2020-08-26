import React from "react";

<<<<<<< HEAD
const LootBox = (props) => {
=======
import './LootBox.scss';

const LootBox = props => {
>>>>>>> 7bda6b1b036d6a0b1345e46b26c9a7d7cb33708f
  // const { product, basket } = props;

  const { lootBox, basket } = props;
  const existingLootBox = basket.find(
    (item) => item.lootBox._id === lootBox._id
  );
  const quantity = existingLootBox ? existingLootBox.quantity : 0;
<<<<<<< HEAD
  console.log("props, lootBox");
=======
>>>>>>> 7bda6b1b036d6a0b1345e46b26c9a7d7cb33708f
  return (
    <div key={props.lootBox._id} className="lootbox-single">
      <h3>{props.lootBox.name}</h3>
      <img
        src={props.lootBox.picture}
        alt={"LootBox.name"}
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
            : props.lootBox.priceInCredits.amount}{" "}
          credits
        </p>
      }
    </div>
  );
};

export default LootBox;
