import React, { Component } from 'react';
// import { listProducts } from '../services/product';

// import ProductItem from '../components/ProductItem';

class ShopView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: true,
      products: []
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
        {/* <h1>List of products</h1>
        {this.state.products.map(product => (
          <ProductItem
            key={product._id}
            product={product}
            basket={this.props.basket}
            onChangeQuantity={this.props.onChangeQuantity}
          />
        ))} */}
      </div>
    );
  }
}

export default ShopView;
