import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import { loadMe, signOut } from './services/authentication';
import NewsFeed from './views/NewsFeed';
import SinglePostView from './views/Post/SingleView';
import PostEditView from './views/Post/EditView';
import PostCreationView from './views/Post/CreationView';
import AuthenticationSignUpView from './views/Authentication/SignUpView';
import AuthenticationSignInView from './views/Authentication/SignInView';
import CheckoutView from './views/Credits/CheckoutView';
import BuyCreditsView from './views/Credits/BuyCreditsView';
import ErrorView from './views/ErrorView';
import HomeView from './views/HomeView';
import ShopView from './views/Shop/ShopView';
import ItemCreationView from './views/Admin/ItemCreationView';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';

import { useHistory } from 'react-router-dom';
import AllItemsView from './views/Admin/AllItemsView';
import AdminArea from './views/Admin/AdminArea';
import UserProfile from './views/Social/UserProfile';

import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      user: null,
      basket: []
    };
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    loadMe()
      .then(data => {
        const user = data.user;
        this.handleUserUpdate(user);
      })
      .then(error => {
        console.log(error);
      });
  };

  componentDidUpdate(previousProps, previousState) {
    if (previousState.user) {
      if (previousState.user.credits !== this.state.user.credits) {
        this.loadUser();
      }
    }
  }

  handleUserUpdate = user => {
    ('handle update user');
    this.setState({
      user,
      loaded: true
    });
  };

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

  handleChangeInQuantity = (lootBox, value) => {
    const basketClone = [...this.state.basket];
    const existingLootBox = basketClone.find(
      item => item.lootBox.name === lootBox.name
    );

    if (existingLootBox) {
      const editedLootBox = { ...existingLootBox };
      editedLootBox.quantity += value;
      const index = basketClone.indexOf(existingLootBox);
      if (editedLootBox.quantity > 0) {
        basketClone.splice(index, 1, editedLootBox);
      } else {
        basketClone.splice(index, 1);
      }
    } else if (value > 0) {
      const newLootBox = {
        lootBox,
        quantity: 1
      };
      basketClone.push(newLootBox);
    }

    this.setState({
      basket: basketClone
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} onSignOut={this.handleSignOut} />
        {(this.state.loaded && (
          <Switch>
            <Route path="/" component={HomeView} exact />
            <NewsFeed path="/social/newsfeed" exact />

            <AdminRoute
              path="/admin/items/list"
              component={AllItemsView}
              authorized={this.state.user}
              redirect="/error"
              exact
            />
            <AdminRoute
              path="/admin/create-item"
              render={() => <ItemCreationView user={this.state.user} />}
              authorized={this.state.user}
              redirect="/error"
              exact
            />
            <AdminRoute
              path="/admin"
              render={() => <AdminArea user={this.state.user} />}
              authorized={this.state.user}
              redirect="/error"
              exact
            />
            <Route
              path="/credits"
              render={props => (
                <BuyCreditsView
                  {...props}
                  loadUser={this.loadUser}
                  basket={this.state.basket}
                  onChangeQuantity={this.handleChangeInQuantity}
                />
              )}
            />
            <ProtectedRoute
              path="/checkout"
              render={props => (
                <CheckoutView
                  {...props}
                  user={this.state.user}
                  loadUser={this.loadUser}
                  basket={this.state.basket}
                  onChangeQuantity={this.handleChangeInQuantity}
                />
              )}
              authorized={this.state.user}
              redirect="/error"
              exact
            />
            <AdminRoute
              path="/admin/items/list"
              component={AllItemsView}
              authorized={this.state.user}
              redirect="/error"
              exact
            />
            <Route path="/news-feed" component={NewsFeed} exact />
            {/* <Route path="/shop" component={ShopView} exact /> */}
            <Route
              path="/shop"
              render={props => (
                <ShopView
                  classname="Shop"
                  {...props}
                  basket={this.state.basket}
                  onChangeQuantity={this.handleChangeInQuantity}
                />
              )}
              exact
            />

            <ProtectedRoute
              path="/post/create"
              component={PostCreationView}
              authorized={this.state.user}
              redirect="/authentication/sign-in"
            />

            <ProtectedRoute
              path="/user/:id"
              exact
              component={UserProfile}
              authorized={this.state.user}
              redirect="/authentication/sign-in"
            />
            <ProtectedRoute
              path="/post/:id/edit"
              component={PostEditView}
              authorized={this.state.user}
              redirect="/authentication/sign-in"
            />
            <Route
              path="/post/:id"
              render={props => (
                <SinglePostView {...props} user={this.state.user} />
              )}
              exact
            />
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
