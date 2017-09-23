export default function deletePostProcessReducer(currentState, action) {
  switch (action.type) {
    case 'DELETE_POST_STARTED':
      return {
        ...currentState,
        isDeletingPost: true
      };
    case 'DELETE_POST_COMPLETED':
      return {
        ...currentState,
        posts: currentState.posts.filter(post => post.id !== action.id.id)
      };
    case 'DELETE_NOTE_FAILED':
      return {
        ...currentState
      };
    default:
      return currentState;
  }
}
