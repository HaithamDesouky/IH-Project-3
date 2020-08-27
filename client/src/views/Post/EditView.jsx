import React, { Component } from 'react';
import PostForm from '../../components/Post/PostForm';

import { loadPost, editPost, deletePost } from './../../services/post';

class PostEditView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      content: '',
      photo: null
    };
  }

  componentDidMount() {
    loadPost(this.props.match.params.id)
      .then(data => {
        const post = data.post;
        this.setState({
          loaded: true,
          content: post.content
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handlePostEditing = () => {
    const id = this.props.match.params.id;

    const content = this.state.content;
    const photo = this.state.photo;
    const body = { content, photo };

    editPost(id, body)
      .then(data => {
        this.props.history.push(`/post/${id}`);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handlePostDeletion = event => {
    event.preventDefault();
    const id = this.props.match.params.id;

    deletePost(id)
      .then(() => {
        this.props.history.push('/');
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
          onFormSubmission={this.handlePostEditing}
          isEdit={true}
        />
        {/* <form onSubmit={this.handlePostEditing}>
          <label htmlFor="content-input">Post Content</label>
          <textarea
            id="content-input"
            placeholder="Write your post here..."
            name="content"
            value={this.state.content}
            onChange={this.handleInputChange}
          />
          <button>Edit Post</button>
        </form> */}
        <form onSubmit={this.handlePostDeletion}>
          <button>Delete Post</button>
        </form>
      </div>
    );
  }
}

export default PostEditView;
