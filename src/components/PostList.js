import React from 'react';
import PostItem from './PostItem';
import Spinner from './Spinner';

const NewsList = ({ items, isLoading }) => {
  return (
    <div className="news-list">
      {isLoading && <Spinner />}
      {items.length > 0 &&
        items.map((item, index) => {
          return <PostItem key={item.id} item={item} rank={index + 1} />;
        })}
    </div>
  );
};

export default NewsList;
