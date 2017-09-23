export default function getPostsCommentsReducer(currentState, action) {
  switch (action.type) {
    case 'GET_COMMENTS_STARTED':
      return {
        ...currentState,
        isGettingComments: true
      };
    case 'GET_COMMENTS_COMPLETED':
      return {
        ...currentState,
        comments: action.comments
      };
    case 'GET_COMMENTS_FAILED':
      return {
        ...currentState
      };
    default:
      return currentState;
  }
}
