import React, { Component } from "react";
import { loadUser } from "../../services/user";
import { loadOrders } from "../../services/order";
import { listLootBoxes } from "../../services/shop";
import Order from "../../components/Orders";
import LootBox from "../../components/LootBox/LootBox";
import Item from "../../components/Item/index";

export class MyBoxes extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      profile: null,
      loaded: false,
      orders: [],
      lootBoxes: [],
      itemWon: [],
    };
  }
  componentDidMount() {
    loadUser(this.props.match.params.id)
      .then((profile) => this.saveProfileToState(profile))
      .catch((error) => console.log(error));

    loadOrders().then((data) => {
      this.setState({
        orders: data.orders,
      });
    });

    listLootBoxes().then((data) => {
      const lootBoxes = data.lootBox;
      this.setState({
        loaded: true,
        lootBoxes,
      });
    });
  }

  saveProfileToState = (profile) => {
    this.setState({
      profile,
      loaded: true,
    });
  };

  render() {
    return (
      <div>
        <h1>List of LootBoxes</h1>
        {this.state.orders.length &&
          this.state.orders.map((order) => {
            return <Order {...order} key={order.basket._id} />;
          })}

        <h1>Boxes Bought</h1>
      </div>
    );
  }
}

export default MyBoxes;
