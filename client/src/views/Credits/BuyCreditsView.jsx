import React, { Component } from 'react';
import BuyCredits from './../../components/Credits/BuyCredits';

class BuyCreditsView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      credits: []
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Buy Credits</h1>
        <BuyCredits />
      </div>
    );
  }
}

export default BuyCreditsView;
