import React, { Component } from 'react';
import { listPosts } from '../services/post';
import PostItem from '../components/Post';

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
        console.log(data);
        const posts = data.posts;
        console.log(posts);
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
      <div className="post-list">
        {this.state.posts.map(post => (
          <PostItem {...post} key={post._id} />
        ))}
      </div>
    );
  }
}

export default NewsFeed;
