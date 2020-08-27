import React, { Component } from "react";
import { loadUser } from "../../services/user";
import { loadOrders } from "../../services/order";
import { listLootBoxes } from "../../services/shop";
import { listItems } from "../../services/items";

import Order from "../../components/Orders";
import LootBox from "../../components/LootBox/LootBox";
import Item from "../../components/Item/index";

export class MyBoxes extends Component {
  render() {
    return <h1>I hate react</h1>;
  }
}
export default MyBoxes;
