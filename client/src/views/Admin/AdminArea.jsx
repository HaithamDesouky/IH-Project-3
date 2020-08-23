import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class AdminArea extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to Admin Area</h1>
        <Link to="/admin/create-item">Create Item</Link>
        <Link to="/admin/items/list">View All Items</Link>
      </div>
    );
  }
}

export default withRouter(AdminArea);
