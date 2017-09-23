import getPosts from '../../api/getPosts';

export default function getPostsProcess() {
  return (dispatch, getState, env) => {
    dispatch({ type: 'GET_POSTS_STARTED' });
    return getPosts({
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    })
      .then(posts => {
        dispatch({ type: 'GET_POSTS_COMPLETED', posts });
        return posts;
      })
      .catch(error => {
        dispatch({ type: 'GET_POSTS_FAILED' });
      });
  };
}
