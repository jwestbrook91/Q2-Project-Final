import deletePost from './../../api/actions/deletePost';

export default function deletePostProcess(id) {
  return (dispatch, getState, env) => {
    dispatch({ type: 'DELETE_POST_STARTED' });
    return deletePost(id, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    })
      .then(id => {
        dispatch({ type: 'DELETE_POST_COMPLETED', id });
        return id;
      })
      .catch(error => {
        dispatch({ type: 'DELETE_POST_FAILED' });
      });
  };
}
