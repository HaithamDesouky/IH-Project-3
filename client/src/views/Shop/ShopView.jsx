import React, { Component } from "react";
import { listLootBoxes } from "./../../services/shop";
import LootBox from "../../components/LootBox/LootBox";

import "./ShopView.scss";
import { Link } from "react-router-dom";

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
      <div className="container">
        <h1 className="pageName">Choose your LootBox!</h1>

        <div className="container">
          {this.state.lootBoxes.map((lootBox) => (
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
      </div>
    );
  }
}

export default ShopView;
