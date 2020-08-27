import React, { Component } from 'react';
import PostForm from '../../components/Post/PostForm';

import { createPost } from './../../services/post';

class PostCreationView extends Component {
  constructor() {
    super();
    this.state = {
      content: '',
      photo: null
    };
  }

  handlePostCreation = () => {
    const content = this.state.content;
    const photo = this.state.photo;

    const body = { content, photo };

    createPost(body)
      .then(data => {
        const post = data.post;
        const id = post._id;
        // Redirect user to single post view

        this.props.history.push(`/post/${id}`);
      })
      .catch(error => {
        console.log(error);
      });
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
        <PostForm
          content={this.state.content}
          onContentChange={this.handleContentChange}
          onPhotoChange={this.handlePhotoChange}
          onFormSubmission={this.handlePostCreation}
        />
        {/* <form onSubmit={this.handlePostCreation}>
          <label htmlFor="content-input">Post Content</label>
          <textarea
            id="content-input"
            placeholder="Write your post here..."
            name="content"
            value={this.state.content}
            onChange={this.handleInputChange}
          />
          <button>Create Post</button>
        </form> */}
      </div>
    );
  }
}

export default PostCreationView;
