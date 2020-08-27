import React, { Component } from 'react';
import { listPosts } from '../services/post';
import PostItem from '../components/Post';
import './NewsFeed.scss';

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
      <div className="news-container">
        <div className="newsBox">
          <div className="post-group">
            <h1>Share your Loot!</h1>
            <div className="post-list">
              {this.state.posts.map(post => (
                <PostItem {...post} key={post._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsFeed;
