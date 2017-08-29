import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import { connect }          from 'react-redux';
import { fetchPosts }       from '../actions';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  
  renderNewPostLink() {
    return (
      <Link className="btn btn-primary" to="/posts/new">
        Add a Post
      </Link>    
    );
  }
  
  renderPosts() {   
    return Object.values(this.props.posts).map(post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>     
      );
    });
  }
  
  render() {
    return (
      <div>
        <div className="text-xs-right">
          {this.renderNewPostLink()}
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };  
}

export default connect(mapStateToProps, { fetchPosts })(Posts);