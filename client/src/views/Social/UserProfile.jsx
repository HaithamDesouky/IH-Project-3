import React, { Component } from 'react';
import { loadUser } from '../../services/user';

export class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      profile: null,
      loaded: false
    };
  }
  componentDidMount() {
    loadUser(this.props.match.params.id)
      .then(profile => this.saveProfileToState(profile))
      .catch(error => console.log(error));
  }

  saveProfileToState = profile => {
    this.setState({
      profile,
      loaded: true
    });
  };

  render() {
    console.log(this.state.profile);
    return (
      <div>
        {this.state.loaded && (
          <div>
            {this.state.profile.user.photo && (
              <img src={this.state.profile.user.photo} alt="UserPhoto" />
            )}
            <h1>{this.state.profile.user.name}</h1>
            <h2>Followers:{this.state.profile.user.followers.length} </h2>
            <h2>Posts:{this.state.profile.user.posts.length} </h2>
          </div>
        )}
      </div>
    );
  }
}

export default UserProfile;
