import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ErrorView from '../views/ErrorView';

const AdminRoute = ({ authorized, user, redirect, ...props }) => {
  if (authorized.admin) {
    return <Route {...props} />;
  } else {
    return (
      <Redirect
        to="/"
        to={{
          pathname: '/error',
          state: {
            message: `😮Are you trying to sneak into our admin area, ${authorized.name}? 😮`
          }
        }}
      />
    );
  }
};

export default AdminRoute;
