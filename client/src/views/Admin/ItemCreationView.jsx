import React, { Component } from 'react';
import PostForm from './../../components/PostForm';
import App from './../../App';

// import { createPost } from './../../services/post';

class ItemCreationView extends Component {
  constructor() {
    super();
    this.state = {
      content: '',
      photo: null
    };
  }
  componentDidMount() {
    // this.setState({
    //   user: this.state.user
    // });
    // console.log('state', this.state);
    console.log('props from ', this.props.user);
  }
  handlePostCreation = () => {
    // const content = this.state.content;
    // const photo = this.state.photo;
    // const body = { content, photo };
    // createPost(body)
    //   .then(data => {
    //     const post = data.post;
    //     const id = post._id;
    //     // Redirect user to single post view
    //     this.props.history.push(`/post/${id}`);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  handleContentChange = content => {
    this.setState({
      content
    });
  };

  handlePhotoChange = photo => {
    this.setState({
      photo
    });
  };

  render() {
    return (
      <div>
        {(this.props.user.admin && <h1>hello</h1>) || (
          <h1>Oops! What brought you here! </h1>
        )}
      </div>
    );
  }
}

export default ItemCreationView;
