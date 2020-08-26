import React, { Component } from 'react';
import { orderCredits } from '../../services/creditsOrder';
import { withRouter } from 'react-router-dom';

import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  ElementsConsumer,
  CardElement
} from '@stripe/react-stripe-js';

const stripeApiPublicKey =
  'pk_test_516xd9kHBGALjgD8KAhIM9Zlwqwum82KmLf1Bb5KoTDwPSBBMXtLyfOCnztZVS8LWSvv3n1ZHl9GeXgec6WgmUXQK00gNVB5J4i';

const cardOptions = {
  style: {
    base: {
      fontSize: '16px',
      color: '#424770',
      fontFamily: 'sans-serif',
      padding: '16px'
    },
    invalid: {
      color: '#c23d4b'
    }
  }
};

class BuyCredits extends Component {
  constructor() {
    super();
    this.state = {
      address: ''
    };
  }

  handleCheckout = ({ credits, address, token }) => {
    orderCredits({ credits, address, token })
      .then(data => {
        this.props.loadUser();
        this.props.history.push('/');
      })
      .catch(error => {
        console.log('Order failed', error);
      });
  };

  handleFormSubmission = (event, stripe, elements) => {
    event.preventDefault();
    stripe
      .createToken(elements.getElement(CardElement))
      .then(data => {
        const token = data.token.id;
        const { credits, address } = this.state;

        this.handleCheckout({
          token,
          address,
          credits
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <Elements stripe={loadStripe(stripeApiPublicKey)}>
          <ElementsConsumer>
            {({ stripe, elements }) => (
              <form
                onSubmit={event =>
                  this.handleFormSubmission(event, stripe, elements)
                }
              >
                <label htmlFor="input-address">Shipping Address</label>
                <input
                  id="input-address"
                  type="text"
                  placeholder="Your Address"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleInputChange}
                />

                <select
                  id="credit-pack"
                  name="credits"
                  onChange={this.handleInputChange}
                >
                  <option>How many credits do you want to buy?</option>
                  <option value="250">Credits: 250 for €25</option>
                  <option value="500">Credits: 500 for €50</option>
                  <option value="1000">Credits: 1000 for €100</option>
                  <option value="2000">Credits: 2000 for €200</option>
                </select>

                <label>Credit Card details</label>
                <CardElement options={cardOptions} />

                <button>Complete Purchase</button>
              </form>
            )}
          </ElementsConsumer>
        </Elements>
      </div>
    );
  }
}
export default withRouter(BuyCredits);
