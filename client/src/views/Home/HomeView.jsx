import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomeView.css";
// import { listProducts } from '../services/product';

// import ProductItem from '../components/ProductItem';

class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: true,
      products: [],
    };
  }

  render() {
    return (
      <div className="container">
        <div className="greeting">
          <h1>Today is your lucky day!</h1>
          <h3>We have many lootboxes for your to try</h3>

          <Link to="/shop" className="home-links">
            Check out our amazing boxes here
          </Link>
        </div>

        <div className="second">
          <div className="items">Item 1</div>
          <div className="items">Item 1</div>
          <div className="items">Item 1</div>
        </div>

        <div className="third">
          <Link to="/social/newsfeed" className="home-links">
            See what other members have gotten from their lootboxes!
          </Link>
        </div>
      </div>
    );
  }
}

export default HomeView;
