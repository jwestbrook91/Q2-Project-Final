import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import PostList from './PostList';

const PostHeaderComponent = ({ updateView, items }) => {
  return (
    <div className="post-header">
      <div className="post-header_logo">
        <a href="https://github.com/jwestbrook91">JACK'S</a>
      </div>
      <div className="post-header_title">
        <Link to="/" onClick={updateView}>
          Wonderful Time Wasting Clone
        </Link>
      </div>
      <div>
        <button className="btn">Submit a New Post</button>
      </div>
      <PostList items />
      <Modal isOpen={false}>
        <div>fooooooo</div>
      </Modal>
    </div>
  );
};

export default PostHeaderComponent;
