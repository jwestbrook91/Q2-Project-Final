import updatePostProcess from './updatePostProcess';

jest.mock('../../api/updatePost');
import updatePost from '../../api/updatePost';

import data from '../../mock-data';

describe('updatePostProcess', () => {
  it('Calls updatePost API utility, returns the updated created post, and dispatches UPDATE_POST_COMPLETED action', () => {
    const { id, ...changes } = data.posts[0];
    const thunk = updatePostProcess(id, changes);
    expect(typeof thunk).toBe('function');

    updatePost.mockReturnValueOnce(Promise.resolve({ ...data.posts[0] }));

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(updatedPost => {
      expect(updatePost).toBeCalled();
      expect(updatedPost).toEqual({ ...data.posts[0] });
      expect(dispatch).toBeCalledWith({
        type: 'UPDATE_POST_COMPLETED',
        note: updatedPost
      });
    });
  });
});
