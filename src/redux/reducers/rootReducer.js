import getPostsProcessReducer from './getPostsProcessReducer';
import getCommentsProcessReducer from './getCommentsProcessReducer';
import updatePostProcessReducer from './updatePostProcessReducer';
import updateCommentProcessReducer from './updatePostProcessReducer';
import createPostProcessReducer from './createPostProcessReducer';
import createCommentProcessReducer from './createCommentProcessReducer';
import deletePostProcessReducer from './deletePostProcessReducer';
import deleteCommentProcessReducer from './deleteCommentProcessReducer';

const reducers = [
  getPostsProcessReducer,
  updatePostProcessReducer,
  createPostProcessReducer,
  deletePostProcessReducer,
  getCommentsProcessReducer,
  updateCommentProcessReducer,
  createCommentProcessReducer,
  deleteCommentProcessReducer
];

export default function rootReducer(
  currentState = {
    posts: null,
    comments: null
  },
  action
) {
  return reducers.reduce((nextState, reducer) => reducer(nextState, action), currentState);
}
