import React, { Component } from 'react';
// import BoxView from '../components/BoxView';
import lootBoxes from '../../components/Box/BoxView';
// import { listProducts } from '../services/product';

// import ProductItem from '../components/ProductItem';

class ShopView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: true,
      lootBoxes: []
    };
  }

  componentDidMount() {
    // listProducts()
    //   .then(data => {
    //     const products = data.products;
    //     this.setState({
    //       loaded: true,
    //       products
    //     });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }

  render() {
    return (
      <div>
        Buy our shit
        <h1>List of products</h1>
        <lootBoxes />
      </div>
    );
  }
}

export default ShopView;
