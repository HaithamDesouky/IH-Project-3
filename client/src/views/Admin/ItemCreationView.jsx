import React, { Component } from 'react';
import ItemCreationForm from './../../components/ItemCreationForm';
import { withRouter } from 'react-router-dom';

import { createItem } from './../../services/items';

class ItemCreationView extends Component {
  constructor() {
    super();
    this.state = {
      newItem: {
        name: '',
        itemType: '',
        description: '',
        photo: null
      }
    };
  }

  handlePostCreation = () => {
    let newItem = this.state.newItem;
    newItem.photo = this.state.photo;
    createItem(newItem)
      .then(data => {
        console.log('HEY PROPS', this.props.history);
        const item = data.item;
        const id = item._id;
        // Redirect user to single post view
        this.props.history.push('/admin/items/list');
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleInputChange = event => {
    const property = event.target.name;
    const value = event.target.value;
    const { newItem } = { ...this.state };
    const currentState = newItem;
    currentState[property] = value;

    this.setState({
      newItem: currentState
    });

    // const property = event.target.name;
    // const value = event.target.value;
    // console.log(property, value);
    // this.setState({
    //   content
    // });
  };

  handlePhotoChange = photo => {
    this.setState({
      photo
    });
  };

  render() {
    return (
      <div>
        {(this.props.user && (
          <>
            {(this.props.user.admin && (
              <div>
                <h1>Hello Admin</h1>

                <h2>Create your items here </h2>

                <ItemCreationForm
                  content={this.state.content}
                  onInputChange={this.handleInputChange}
                  onPhotoChange={this.handlePhotoChange}
                  onFormSubmission={this.handlePostCreation}
                />
              </div>
            )) || <h1>Oops! What brought you here! </h1>}
          </>
        )) ||
          'You are not seeing the form'}
      </div>
    );
  }
}

export default withRouter(ItemCreationView);
