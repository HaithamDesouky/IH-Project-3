import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadPost } from './../../services/post';
import CommentInput from '../../components/Post/Comments';
import { createComment } from './../../services/comments';

class SinglePostView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      post: null,
      newComment: {
        creator: '',
        content: ''
      }
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    loadPost(id)
      .then(data => {
        const post = data.post;
        this.setState({
          post,
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleCommentCreation = () => {
    let newComment = this.state.newComment;
    createComment(newComment)
      .then(data => {
        console.log('HEY PROPS', data);
        // const item = data.item;
        // const id = item._id;
        // Redirect user to single post view
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleInputChange = event => {
    const content = event.target.value;
    let newComment = this.state.newComment;
    newComment.content = content;
    newComment.creator = this.props.user._id;

    this.setState({
      newComment
    });
  };

  render() {
    const post = this.state.post;
    console.log('single view user', this.props, this.state);
    return (
      <div>
        {(this.state.loaded && (
          <>
            {post.photo && <img src={post.photo} alt={post.content} />}
            <p>{post.content}</p>
            <small>{post.creationDate}</small>
            <Link to={`/post/${this.props.match.params.id}/edit`}>
              Edit Post
            </Link>
            <CommentInput
              content={this.state.content}
              onInputChange={this.handleInputChange}
              onFormSubmission={this.handleCommentCreation}
            />
          </>
        )) || <p>Loading...</p>}
      </div>
    );
  }
}

export default SinglePostView;
