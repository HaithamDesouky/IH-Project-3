import React, { Component } from 'react';
import { listPosts } from '../../services/post';
import PostItem from '../../components/Post';
import './social.scss';

class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      posts: []
    };
  }

  componentDidMount() {
    listPosts()
      .then(data => {
        const posts = data.posts;

        this.setState({
          posts,
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="newsfeed-container">
        <h1>Newsfeed</h1>
        <div className="post-list">
          {this.state.posts.map(post => (
            <PostItem {...post} key={post._id} />
          ))}
        </div>{' '}
      </div>
    );
  }
}

export default NewsFeed;
