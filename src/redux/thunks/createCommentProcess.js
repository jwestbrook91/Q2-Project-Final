import createComment from './../../api/utils/createComment';

export default function createCommentProcess(comment) {
  return (dispatch, getState, env) => {
    dispatch({ type: 'ADD_COMMENT_STARTED' });
    return createComment(comment, {
      databaseId: env.AIRTABLE_DATABASE.ID,
      token: env.AIRTABLE_TOKEN
    })
      .then(comment => {
        dispatch({ type: 'ADD_COMMENT_COMPLETED', comment });
        return comment;
      })
      .catch(error => {
        dispatch({ type: 'ADD_COMMENT_FAILED' });
      });
  };
}
