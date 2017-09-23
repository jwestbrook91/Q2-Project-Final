import updatePost from './../../api/actions/updatePost';

export default function updatePostProcess(id, changes) {
  return (dispatch, getState, env) => {
    dispatch({ type: 'UPDATE_POST_STARTED' });
    return updatePost(id, changes, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    })
      .then(updatedPost => {
        dispatch({ type: 'UPDATE_POST_COMPLETED', post: updatedPost });
        return updatedPost;
      })
      .catch(error => {
        dispatch({ type: 'UPDATE_POST_FAILED' });
      });
  };
}
