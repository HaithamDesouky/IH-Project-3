import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import { loadMe, signOut } from './services/authentication';
import { createBrowserHistory } from 'history';
import NewsFeed from './views/NewsFeed';
import SinglePostView from './views/Post/SingleView';
import PostEditView from './views/Post/EditView';
import PostCreationView from './views/Post/CreationView';
import AuthenticationSignUpView from './views/Authentication/SignUpView';
import AuthenticationSignInView from './views/Authentication/SignInView';
import ErrorView from './views/ErrorView';
import HomeView from './views/HomeView';
import ShopView from './views/ShopView';
import ItemCreationView from './views/Admin/ItemCreationView';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import { useHistory } from 'react-router-dom';

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
    console.log('running');
    this.setState({
      user
    });
  };
  /*
componentDidUpdate(previousState, previousProps){
  if(this.state)
}*/

  handleSignOut = () => {
    signOut()
      .then(() => {
        this.props.history.push('/');
        this.handleUserUpdate(null);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log(this.state.user);
    return (
      <div className="App">
        <Navbar user={this.state.user} onSignOut={this.handleSignOut} />
        {(this.state.loaded && (
          <Switch>
            <Route path="/" component={HomeView} exact />
            <Route path="/create-item" component={ItemCreationView} exact />

            <Route path="/news-feed" component={NewsFeed} exact />
            <Route path="/shop" component={ShopView} exact />
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
      </div>
    );
  }
}

export default withRouter(App);
