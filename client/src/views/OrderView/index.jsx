import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadSingleOrder } from './../../services/order';
import './index.scss';

class OrderView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      order: null
    };
  }
  loadData = () => {
    const id = this.props.match.params.id;
    loadSingleOrder(id)
      .then(data => {
        const order = data.order;

        console.log(data.order);

        this.setState({
          order,
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div className="singleview-container">
        <div className="single-order">
          <h1>Your order</h1>
          {this.state.order && (
            <>
              {' '}
              <div>
                <p>
                  <strong>Date Ordered:</strong>
                  {new Date(this.state.order.creationDate).toGMTString()}
                </p>
                <p>
                  <strong>Total:</strong> {this.state.order.total} credits
                </p>

                <p>
                  <strong>Delivered to:</strong> {this.state.order.user.address}
                </p>
                <p>
                  <strong>Items Ordered:</strong>
                  <ul>
                    {this.state.order.basket.map(item => (
                      <li>{item.lootBox.name}</li>
                    ))}{' '}
                  </ul>
                </p>
                <p>
                  <strong>Order Status:</strong> Confirmed
                </p>

                <Link
                  className="home-links"
                  to={`/user/${this.state.order.user._id}`}
                >
                  Go back to your profile
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default OrderView;
