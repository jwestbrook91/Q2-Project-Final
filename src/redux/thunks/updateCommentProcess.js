import updateComment from './../../api/utils/updateComment';

export default function updatePostProcess(id, changes) {
  return (dispatch, getState, env) => {
    dispatch({ type: 'UPDATE_COMMENT_STARTED' });
    return updateComment(id, changes, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    })
      .then(updatedComment => {
        dispatch({ type: 'UPDATE_COMMENT_COMPLETED', comment: updatedComment });
        return updatedComment;
      })
      .catch(error => {
        dispatch({ type: 'UPDATE_COMMENT_FAILED' });
      });
  };
}
