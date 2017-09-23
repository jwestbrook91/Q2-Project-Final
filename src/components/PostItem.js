import React from 'react';
import { Link } from 'react-router-dom';

import nl2br from 'react-nl2br';

export default function PostItem({ post = {}, showTitle = true, showDescription = false }) {
  return (
    <div className="PostItem">
      {showTitle &&
        <h2 className="PostItem-title">
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </h2>}
    </div>
  );
}
