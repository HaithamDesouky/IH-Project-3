import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ErrorView from '.././views/ErrorView';

const ProtectedRoute = ({ authorized, redirect, ...props }) => {
  if (authorized) {
    return <Route {...props} />;
  } else {
    return (
      <Redirect
        to="/"
        to={{
          pathname: '/error',
          state: { message: 'gtfo bro sign yo bitch ass up' }
        }}
      />
    );
  }
};

export default ProtectedRoute;
