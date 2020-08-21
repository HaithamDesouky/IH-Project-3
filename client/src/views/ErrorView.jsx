import React from 'react';

class ErrorView extends React.Component {
  render() {
    // console.log(this.props.location.state.message);
    return (
      <div>
        <h1>There was an error</h1>

        <h2>{this.props.location.state.message}</h2>
      </div>
    );
  }
}

export default ErrorView;
