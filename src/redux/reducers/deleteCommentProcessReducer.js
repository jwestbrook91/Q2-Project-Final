export default function deleteCommentProcessReducer(currentState, action) {
  switch (action.type) {
    case 'DELETE_COMMENT_STARTED':
      return {
        ...currentState,
        isDeletingComment: true
      };
    case 'DELETE_COMMENT_COMPLETED':
      return {
        ...currentState,
        posts: currentState.comments.filter(comment => comment.id !== action.id.id)
      };
    case 'DELETE_COMMENT_FAILED':
      return {
        ...currentState
      };
    default:
      return currentState;
  }
}
