import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadSingleOrder } from './../../services/order';

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
    return <div className="singleview-container"></div>;
  }
}

export default OrderView;
