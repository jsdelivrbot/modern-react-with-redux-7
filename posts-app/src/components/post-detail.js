import React, { Component }      from 'react';
import { Link }                  from 'react-router-dom';
import { connect }               from 'react-redux';
import { fetchPost, deletePost } from '../actions';

class PostDetail extends Component {
  constructor(props) {
    super(props);  
    
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }
  
  componentDidMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params;

      this.props.fetchPost(id);  
    }
  }
  
  onDeleteClick() {
    const { id } = this.props.match.params;
    
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }
  
  render() {
    const { post } = this.props;
    
    if (!post) {
      return <div>Loading...</div>;
    }
    
    return (
      <div>
        <Link className="btn btn-primary" to="/">Back To Index</Link>
        <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick}>Delete Post</button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostDetail);