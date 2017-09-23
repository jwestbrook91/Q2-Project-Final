export default function createCommentProcessReducer(currentState, action) {
  switch (action.type) {
    case 'ADD_COMMENT_STARTED':
      return {
        ...currentState,
        isCreatingComment: true
      };
    case 'ADD_COMMENT_COMPLETED':
      return {
        ...currentState,
        posts: [action.comment, ...currentState.comments]
      };
    case 'ADD_COMMENT_FAILED':
      return {
        posts: currentState.comments.filter(comment => comment.id !== action.id.id)
      };
    default:
      return currentState;
  }
}
