import React, { Component } from 'react';

import BasketInformation from '../../components/Credits/BasketInformation';
import { withRouter } from 'react-router-dom';

import LootBox from './../../components/LootBox/LootBox';
import './CheckoutView.scss';

class CheckoutView extends Component {
  render() {
    const { basket, user } = this.props;
    return (
      <div className="checkout-container">
        <h1 className="checkout-title">Products in basket</h1>

        <div>
          <div>
            {(basket.length &&
              basket.map(item => (
                <LootBox
                  key={item.lootBox._id}
                  lootBox={item.lootBox}
                  basket={this.props.basket}
                  onChangeQuantity={this.props.onChangeQuantity}
                />
              ))) || <p>There are no items in the basket</p>}
          </div>
          <h2>Totals</h2>
          <BasketInformation
            loadUser={this.props.loadUser}
            user={user}
            basket={basket}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(CheckoutView);
