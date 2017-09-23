import createPost from './../../api/actions/createPost';

export default function createPostProcess(post) {
  return (dispatch, getState, env) => {
    dispatch({ type: 'ADD_POST_STARTED' });
    return createPost(post, {
      databaseId: env.AIRTABLE_DATABASE.ID,
      token: env.AIRTABLE_TOKEN
    })
      .then(post => {
        dispatch({ type: 'ADD_POST_COMPLETED', post });
        return post;
      })
      .catch(error => {
        dispatch({ type: 'ADD_POST_FAILED' });
      });
  };
}
