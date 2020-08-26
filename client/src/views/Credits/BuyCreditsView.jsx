import React, { Component } from 'react';
import BuyCredits from './../../components/Credits/BuyCredits';
import { withRouter } from 'react-router-dom';
import { throws } from 'assert';
import './credits.scss';

class BuyCreditsView extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="container ">
        <div className="credits-div">
          <h1>Buy Credits</h1>
          <BuyCredits loadUser={this.props.loadUser} />
        </div>
      </div>
    );
  }
}

export default withRouter(BuyCreditsView);
