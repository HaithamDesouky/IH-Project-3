import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { loadMe, signOut } from './services/authentication';

import HomeView from './views/HomeView';
import SinglePostView from './views/Post/SingleView';
import PostEditView from './views/Post/EditView';
import PostCreationView from './views/Post/CreationView';
import AuthenticationSignUpView from './views/Authentication/SignUpView';
import AuthenticationSignInView from './views/Authentication/SignInView';
import ErrorView from './views/ErrorView';

import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      user: null
    };
  }

  componentDidMount() {
    this.setState({
      loaded: true
    });

    loadMe()
      .then(data => {
        const user = data.user;
        this.handleUserUpdate(user);
        this.setState({
          loaded: true
        });
      })
      .then(error => {
        console.log(error);
      });
  }

  handleUserUpdate = user => {
    this.setState({
      user
    });
  };

  handleSignOut = () => {
    signOut()
      .then(() => {
        this.handleUserUpdate(null);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar user={this.state.user} onSignOut={this.handleSignOut} />
          {(this.state.loaded && (
            <Switch>
              <Route path="/" component={HomeView} exact />
              <ProtectedRoute
                path="/post/create"
                component={PostCreationView}
                authorized={this.state.user}
                redirect="/authentication/sign-in"
              />
              <ProtectedRoute
                path="/post/:id/edit"
                component={PostEditView}
                authorized={this.state.user}
                redirect="/authentication/sign-in"
              />
              <Route path="/post/:id" component={SinglePostView} />
              <ProtectedRoute
                path="/authentication/sign-up"
                render={props => (
                  <AuthenticationSignUpView
                    {...props}
                    onUserUpdate={this.handleUserUpdate}
                  />
                )}
                authorized={!this.state.user}
                redirect="/"
              />
              <ProtectedRoute
                path="/authentication/sign-in"
                render={props => (
                  <AuthenticationSignInView
                    {...props}
                    onUserUpdate={this.handleUserUpdate}
                  />
                )}
                authorized={!this.state.user}
                redirect="/"
              />
              <Route path="/error" component={ErrorView} />
              <Redirect from="/" to="/error" />
              {/* <Route path="/authentication/sign-in" component={AuthenticationSignInView} /> */}
            </Switch>
          )) || (
            <div>
              <h1>Loading...</h1>
            </div>
          )}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
