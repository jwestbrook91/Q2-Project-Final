export default function updatePostProcessReducer(currentState, action) {
  switch (action.type) {
    case 'UPDATE_POST_STARTED':
      return {
        ...currentState,
        isUpdatingPost: true
      };
    case 'UPDATE_POST_COMPLETED':
      return {
        ...currentState,
        posts: currentState.posts.map(post => (post.id === action.post.id ? action.post : post)),
        isUpdatingPost: false
      };
    case 'UPDATE_POST_FAILED':
      return {
        ...currentState,
        didUpdatingNoteFail: true
      };
    default:
      return currentState;
  }
}
