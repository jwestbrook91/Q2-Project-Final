export default function createPostProcessReducer(currentState, action) {
  switch (action.type) {
    case 'ADD_POST_STARTED':
      return {
        ...currentState,
        isCreatingPost: true
      };
    case 'ADD_POST_COMPLETED':
      return {
        ...currentState,
        posts: [action.post, ...currentState.posts]
      };
    case 'ADD_POST_FAILED':
      return {
        posts: currentState.posts.filter(post => post.id !== action.id.id)
      };
    default:
      return currentState;
  }
}
