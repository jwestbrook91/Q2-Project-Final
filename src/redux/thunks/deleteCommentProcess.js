import deleteComment from './../../api/utils/deleteComment';

export default function deleteCommentProcess(id) {
  return (dispatch, getState, env) => {
    dispatch({ type: 'DELETE_COMMENT_STARTED' });
    return deleteComment(id, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    })
      .then(id => {
        dispatch({ type: 'DELETE_COMMENT_COMPLETED', id });
        return id;
      })
      .catch(error => {
        dispatch({ type: 'DELETE_COMMENT_FAILED' });
      });
  };
}
