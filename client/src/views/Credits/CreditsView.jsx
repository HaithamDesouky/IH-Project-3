import React, { Component } from 'react';
import { listCredits } from '../../services/credits';

import CreditsPack from '../../components/Credits/CreditsPack';

class CreditsView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      credits: []
    };
  }

  componentDidMount() {
    // listCredits()
    //   .then(data => {
    //     const credits = data.credits;
    //     this.setState({
    //       loaded: true,
    //       credits
    //     });
    // })
    // .catch(error => {
    //   console.log(error);
    // });
  }

  render() {
    return (
      <div>
        <h1>Buy Credits</h1>
        {/* {this.state.credits.map(credits => (
          <CreditsPack
            key={credits._id}
            product={credits}
            basket={this.props.basket}
            onChangeQuantity={this.props.onChangeQuantity}
          />
        ))} */}
      </div>
    );
  }
}

export default CreditsView;
