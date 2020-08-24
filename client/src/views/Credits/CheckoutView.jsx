import React, { Component } from 'react';

import BasketInformation from '../../components/Credits/BasketInformation';
import CreditsPack from '../../components/Credits/CreditsPack';
import CheckoutForm from '../../components/Credits/CheckoutForm';

import { createOrder } from '../../services/order';

class CheckoutView extends Component {
  handleCheckout = ({ address, token }) => {
    const basket = this.props.basket.map(item => {
      return {
        credits: this.props.user.credits,
        quantity: item.quantity
      };
    });
    createOrder({ basket, address, token })
      .then(data => {
        this.props.history.push('/');
      })
      .catch(error => {
        console.log('Order failer', error);
      });
  };

  render() {
    const { basket } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>Products in basket</h1>
        {(basket.length &&
          basket.map(item => (
            <CreditsPack
              key={item.credits}
              product={item.credits}
              basket={this.props.basket}
              onChangeQuantity={this.props.onChangeQuantity}
            />
          ))) || <p>There are no items in the basket</p>}
        <h2>Totals</h2>
        <BasketInformation list={this.props.basket} />
        <CheckoutForm onCheckout={this.handleCheckout} />
      </div>
    );
  }
}

export default CheckoutView;
