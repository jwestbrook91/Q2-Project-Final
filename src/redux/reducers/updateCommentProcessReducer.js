export default function updateCommentProcessReducer(currentState, action) {
  switch (action.type) {
    case 'UPDATE_COMMENT_STARTED':
      return {
        ...currentState,
        isUpdatingComment: true
      };
    case 'UPDATE_COMMENT_COMPLETED':
      return {
        ...currentState,
        posts: currentState.comments.map(comment => (comment.id === action.comment.id ? action.comment : comment)),
        isUpdatingComment: false
      };
    case 'UPDATE_COMMENT_FAILED':
      return {
        ...currentState,
        isUpdatingComment: false,
        didUpdatingCommentFail: true
      };
    default:
      return currentState;
  }
}
