import React from 'react';
import { compose, lifecycle } from 'recompose';
import PostsHeaderComponent from '../../components/PostsHeaderComponent';

import { connect } from 'react-redux';

import getPostsProcess from '../thunks/getPostsProcess';
import createPostProcess from '../thunks/createPostProcess';
import deletePostProcess from '../thunks/deletePostProcess';
import updatePostProcess from '../thunks/updatePostProcess';

// const Home = ({ children, updateView }) => {
//   return (
//     <div>
//       <PostsHeaderComponent updateView={updateView} />
//       {children}
//     </div>
//   );
// };
const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMount: () => dispatch(getPostsProcess()),
    onSubmit: postId => dispatch({ type: 'GET_P' })
    // dispatch the getPostsProcess()
    // in getPostsProcess, invoke the getPosts api utility,
    // then, once you have response, dispatch an
    // action(that has a type, and some property filled with info)
    //  to the reducer:
    // dispatch({type: 'GET_ITEMS_LIST', list: response })
  };
};

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(PostsHeaderComponent);
