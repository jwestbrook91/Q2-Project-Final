import getPostsProcess from './getPostsProcess';

jest.mock('../../api/getPosts');
import getPosts from '../../api/getPosts';

import data from '../../mock-data';

describe('getPostsProcess', () => {
  it('Calls getPosts API utility, returns array of posts, and dispatches GET_POSTS_COMPLETED action', () => {
    const thunk = getPostsProcess();
    expect(typeof thunk).toBe('function');

    getPosts.mockReturnValueOnce(Promise.resolve([...data.posts]));

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(posts => {
      expect(getPosts).toBeCalled();
      expect(posts).toEqual([...data.posts]);
      expect(dispatch).toBeCalledWith({ type: 'GET_POSTS_COMPLETED', posts });
    });
  });
});
