import createPostProcess from './createPostProcess';

jest.mock('../../api/createPost');
import createPost from '../../api/createPost';

import data from '../../mock-data';

describe('createPostProcess', () => {
  it('Calls createPost API utility, returns the newly created post, and dispatches CREATE_POST_COMPLETED action', () => {
    const { id, ...postWithoutId } = data.posts[0];
    const thunk = createPostProcess(postWithoutId);
    expect(typeof thunk).toBe('function');

    createPost.mockReturnValueOnce(Promise.resolve({ ...data.posts[0] }));

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(createdPost => {
      expect(createPost).toBeCalled();
      expect(createdPost).toEqual({ ...data.posts[0] });
      expect(dispatch).toBeCalledWith({
        type: 'CREATE_POST_COMPLETED',
        post: createdPost
      });
    });
  });
});
