import React, { Component } from 'react';

import BasketInformation from '../../components/Credits/BasketInformation';
import CreditsPack from '../../components/Credits/CreditsPack';
import CheckoutForm from '../../components/Credits/CheckoutForm';

import { createOrder } from '../../services/order';
import LootBox from './../../components/LootBox/LootBox';

class CheckoutView extends Component {
  render() {
    const { basket, user } = this.props;
    return (
      <div>
        <h1>Products in basket</h1>
        {(basket.length &&
          basket.map(item => (
            <LootBox
              key={item.lootBox._id}
              lootBox={item.lootBox}
              basket={this.props.basket}
              onChangeQuantity={this.props.onChangeQuantity}
            />
          ))) || <p>There are no items in the basket</p>}
        <h2>Totals</h2>
        <BasketInformation user={user} basket={basket} />
      </div>
    );
  }
}

export default CheckoutView;
