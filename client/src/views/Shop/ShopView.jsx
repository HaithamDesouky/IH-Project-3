import React, { Component } from 'react';
import { listboxes } from './../../services/shop';
import LootBox from '../../components/Box/BoxView';

class ShopView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      lootBoxes: []
    };
  }

  componentDidMount() {
    listboxes()
      .then(data => {
        const lootBoxes = data.lootBoxes;
        this.setState({
          loaded: true,
          lootBoxes
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        Buy our shit
        <h1>List of products</h1>
        {(this.state.loaded &&
          this.state.lootBoxes.map(lootBox => (
            <LootBox {...lootBox} key={lootBox._id} />
          ))) || <h1>Loading...</h1>}
      </div>
    );
  }
}

export default ShopView;
