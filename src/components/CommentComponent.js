import React, { Component } from 'react';
import PostItem from './PostItem';
import { Link } from 'react-router';

class Comment extends Component {
  onClick = () => {
    this.refs.child.style.display = 'none';
  };

  getComments = (comment, authorId) => {
    return (
      <div key={comment.id} className="comment">
        <div className="news-item_subtext">
          <Link to={`/author/${authorId}`}>
            {authorId}
          </Link>
        </div>
      </div>
    );
  };

  render() {
    const { comments } = this.props;
    return (
      <div className="news-list">
        <PostItem key={comments.id} item={comments} />
        <div className="comment-gap">
          {comments.kids.map(kid => {
            return this.getComment(kid);
          })}
        </div>
      </div>
    );
  }
}

export default Comment;
