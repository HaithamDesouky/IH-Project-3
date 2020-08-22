import React, { Component } from 'react';
// import { listProducts } from '../services/product';

// import ProductItem from '../components/ProductItem';

class HomeView extends Component {
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
    return <div>Welcome you gambling degenerate</div>;
  }
}

export default HomeView;
