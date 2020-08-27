import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import ErrorView from '.././views/ErrorView';

const ProtectedRoute = ({ authorized, redirect, ...props }) => {
  if (authorized) {
    return <Route {...props} />;
  } else {
    return (
      <Redirect
        to="/"
        to={{
          pathname: '/error',
          state: { message: 'You are not signed in.' }
        }}
      />
    );
  }
};

export default ProtectedRoute;
