export default function getPostsProcessReducer(currentState, action) {
  switch (action.type) {
    case 'GET_POSTS_STARTED':
      return {
        ...currentState,
        isGettingPosts: true
      };
    case 'GET_POSTS_COMPLETED':
      return {
        ...currentState,
        posts: action.posts
      };
    case 'GET_POSTS_FAILED':
      return {
        ...currentState
      };
    default:
      return currentState;
  }
}
