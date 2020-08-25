import React, { Component } from "react";
import { loadUser } from "../../services/user";
import { listLootBoxes } from "../../services/shop";
import LootBox from "../../components/LootBox/LootBox";

export class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      profile: null,
      loaded: false,
    };
  }
  componentDidMount() {
    loadUser(this.props.match.params.id)
      .then((profile) => this.saveProfileToState(profile))
      .catch((error) => console.log(error));

    listLootBoxes()
      .then((data) => {
        const lootBoxes = data.lootBox;
        this.setState({
          loaded: true,
          lootBoxes,
        });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  saveProfileToState = (profile) => {
    this.setState({
      profile,
      loaded: true,
    });
  };

  render() {
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
