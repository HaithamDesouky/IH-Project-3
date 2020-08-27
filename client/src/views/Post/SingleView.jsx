import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadPost } from './../../services/post';
import CommentInput from '../../components/Post/Comments';
import { createComment } from './../../services/comments';
import Comments from '../../components/Comments';
import './SingleView.scss';

class SinglePostView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      post: null,
      sameUser: false,
      comments: [],
      newComment: {
        creator: '',
        content: ''
      }
    };
  }
  loadData = () => {
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
  };

  componentDidMount() {
    console.log(this.props.user);

    this.loadData();
  }

  handleCommentCreation = () => {
    let newComment = this.state.newComment;
    // const id = this.props.match.params.id;
    createComment(newComment)
      .then(data => {
        this.loadData();
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
      <div className="singleview-container">
        {(this.state.loaded && (
          <>
            {post.photo && (
              <img src={post.photo} alt={post.content} id="post-img" />
            )}
            <p>{post.content}</p>
            <small> {post.creationDate}</small>
            {/* <Link to={`/post/${this.props.match.params.id}/edit`}>
              Edit Post
            </Link> */}

            <h4>Author: {post.creator.name}</h4>
            <CommentInput
              content={this.state.content}
              onInputChange={this.handleInputChange}
              onFormSubmission={this.handleCommentCreation}
            />

            <h2>Comments</h2>
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
