import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { loadUser } from '../../services/user';
import { loadOrders } from '../../services/order';
import Order from '../../components/Orders';
// import NavBar from "../../components/Navbar";
import './UserProfile.scss';

export class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      profile: null,
      loaded: false,
      orders: []
    };
  }
  componentDidMount() {
    loadUser(this.props.match.params.id)
      .then(profile => this.saveProfileToState(profile))
      .catch(error => console.log(error));

    loadOrders().then(data => {
      this.setState({
        orders: data.orders
      });
    });
  }

  saveProfileToState = profile => {
    this.setState({
      profile,
      loaded: true
    });
  };

  render = () => {
    return (
      <div class="profile">
        {this.state.loaded && (
          <div>
            {this.state.profile.user.photo && (
              <div>
                <img src={this.state.profile.user.photo} alt="UserPhoto" />
              </div>
            )}
            <h1>{this.state.profile.user.name}</h1>
            <h2>Followers:{this.state.profile.user.followers.length} </h2>
            <h2>Posts:{this.state.profile.user.posts.length} </h2>

            <h1>Your orders</h1>
            {this.state.orders.length &&
              this.state.orders.map(order => {
                return <Order {...order} key={order._id} />;
              })}
            <div></div>
          </div>
        )}
      </div>
    );
  };
}

export default UserProfile;
