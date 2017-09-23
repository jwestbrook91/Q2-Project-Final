import getComments from './../../api/utils/getComments';

export default function getCommentsProcess() {
  return (dispatch, getState, env) => {
    dispatch({ type: 'GET_COMMENTS_STARTED' });
    return getComments({
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    })
      .then(comments => {
        dispatch({ type: 'GET_COMMENTS_COMPLETED', comments });
        return comments;
      })
      .catch(error => {
        dispatch({ type: 'GET_COMMENTS_FAILED' });
      });
  };
}
