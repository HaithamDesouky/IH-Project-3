import React, { Component } from 'react';
import { listItems } from './../../services/items';

import Item from '../../components/Item';

class AllItemsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      items: []
    };
  }

  componentDidMount() {
    listItems()
      .then(data => {
        const items = data.items;
        this.setState({
          items,
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>All Items View</h1>
        {(this.state.loaded &&
          this.state.items.map(item => <Item {...item} key={item._id} />)) || (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

export default AllItemsView;
