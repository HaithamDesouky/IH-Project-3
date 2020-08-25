import React, { Component } from 'react';
import { listLootBoxes } from './../../services/shop';
import LootBox from '../../components/LootBox/LootBox';
import anime from './images/anime.png';
import entertainment from './images/entertainment.jpg';
import gaming from './images/gaming.svg';
import mystery from './images/mystery.png';

class ShopView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      lootBoxes: []
    };
  }

  componentDidMount() {
    listLootBoxes()
      .then(data => {
        const lootBoxes = data.lootBox;
        this.setState({
          loaded: true,
          lootBoxes
        });
        console.log(this.state);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        Buy our shit
        <h1>List of LootBoxes</h1>
        {this.state.lootBoxes.map(lootBox => (
          <LootBox
            picture={lootBox.picture}
            name={lootBox.name}
            priceInCredits={lootBox.priceInCredits.amount}
            quantity={0}
            onChangeQuantity={this.props.onChangeQuantity}
            basket={this.props.basket}
          />
        ))}
      </div>
    );
  }
}

export default ShopView;
