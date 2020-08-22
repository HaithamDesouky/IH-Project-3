import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminArea() {
  return (
    <div>
      <h1>Welcome to Admin Area</h1>
      <Link to="/admin/create-item">Create Item</Link>
      <Link to="/admin/items/list">View All Items</Link>
    </div>
  );
}
