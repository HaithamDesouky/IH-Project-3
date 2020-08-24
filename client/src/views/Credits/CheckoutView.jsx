import React, { Component } from "react";

import BasketInformation from "../../components/Credits/BasketInformation";
import CreditsPack from "../../components/Credits/CreditsPack";
import CheckoutForm from "../../components/Credits/CheckoutForm";

import { createOrder } from "../../services/order";

class CheckoutView extends Component {
  handleCheckout = ({ address, token }) => {
    const basket = this.props.basket.map((item) => {
      return {
        creditsId: item.credits._id,
        quantity: item.quantity,
      };
    });
    createOrder({ basket, address, token })
      .then((data) => {
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log("Order failer", error);
      });
  };

  render() {
    const { basket } = this.props;

    return (
      <div>
        <h1>Products in basket</h1>
        {(basket.length &&
          basket.map((item) => (
            <CreditsPack
              key={item.credits._id}
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
