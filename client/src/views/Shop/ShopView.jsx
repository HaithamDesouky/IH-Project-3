<<<<<<< HEAD
import React, { Component } from "react";
import { listLootBoxes } from "./../../services/shop";
import LootBox from "../../components/LootBox/LootBox";
import anime from "./images/anime.png";
import entertainment from "./images/entertainment.jpg";
import gaming from "./images/gaming.svg";
import mystery from "./images/mystery.png";
=======
import React, { Component } from 'react';
import { listLootBoxes } from './../../services/shop';
import LootBox from '../../components/LootBox/LootBox';

import './ShopView.scss';
import { Link } from 'react-router-dom';
>>>>>>> 7bda6b1b036d6a0b1345e46b26c9a7d7cb33708f

class ShopView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      lootBoxes: [],
    };
  }

  componentDidMount() {
    listLootBoxes()
      .then((data) => {
        const lootBoxes = data.lootBox;
        this.setState({
          loaded: true,
          lootBoxes,
        });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
<<<<<<< HEAD
      <div>
        <h1>List of LootBoxes</h1>
        {this.state.lootBoxes.map((lootBox) => (
          <LootBox
            key={lootBox._id}
            lootBox={lootBox}
            onChangeQuantity={this.props.onChangeQuantity}
            basket={this.props.basket}
          />
        ))}
=======
      <div className="container">
        <h1>Choose your LootBox!</h1>

        <div className="container">
          {this.state.lootBoxes.map(lootBox => (
            <LootBox
              key={lootBox._id}
              lootBox={lootBox}
              onChangeQuantity={this.props.onChangeQuantity}
              basket={this.props.basket}
            />
          ))}
        </div>

        <Link className="home-links" to="/checkout">
          Checkout
        </Link>
>>>>>>> 7bda6b1b036d6a0b1345e46b26c9a7d7cb33708f
      </div>
    );
  }
}

export default ShopView;
