import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadPost } from './../../services/post';
import CommentInput from '../../components/Post/Comments';
import { createComment, loadComments } from './../../services/comments';
import Comments from '../../components/Comments';

class SinglePostView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      post: null,
      comments: [],
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
          comments: [...post.comments],
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleCommentCreation = () => {
    let newComment = this.state.newComment;
    const id = this.props.match.params.id;
    createComment(newComment)
      .then(data => {
        this.componentDidMount();
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
    newComment.post = this.props.match.params.id;

    this.setState({
      newComment
    });
  };

  render() {
    const post = this.state.post;
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

            {this.state.comments.map(eachComment => (
              <Comments {...eachComment} key={eachComment._id} />
            ))}
          </>
        )) || <p>Loading...</p>}
      </div>
    );
  }
}

export default SinglePostView;
