import React, { Component } from 'react';
import BuyCredits from './../../components/Credits/BuyCredits';
import { withRouter } from 'react-router-dom';
import { throws } from 'assert';

class BuyCreditsView extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Buy Credits</h1>
        <BuyCredits loadUser={this.props.loadUser} />
      </div>
    );
  }
}

export default withRouter(BuyCreditsView);
