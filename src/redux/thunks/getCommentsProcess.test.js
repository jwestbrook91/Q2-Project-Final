import getCommentsProcess from './getCommentsProcess';

jest.mock('../../api/getComments');
import getComments from '../../api/getComments';

import data from '../../mock-data-comments';

describe('getCommentsProcess', () => {
  it('Calls getComments API utility, returns array of comments, and dispatches GET_COMMENTS_COMPLETED action', () => {
    const thunk = getCommentsProcess();
    expect(typeof thunk).toBe('function');

    getComments.mockReturnValueOnce(Promise.resolve([...data.comments]));

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(comments => {
      expect(getComments).toBeCalled();
      expect(comments).toEqual([...data.comments]);
      expect(dispatch).toBeCalledWith({ type: 'GET_POSTS_COMPLETED', comments });
    });
  });
});
