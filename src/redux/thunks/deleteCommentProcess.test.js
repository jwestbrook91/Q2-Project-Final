import deleteCommentProcess from './deleteCommentProcess';

jest.mock('../../api/deleteComment');
import deleteComment from '../../api/deleteComment';

import data from '../../mock-data-comments';

describe('deleteCommentProcess', () => {
  it('Calls deleteComment API utility and dispatches DELETE_COMMENT_COMPLETED action', () => {
    const thunk = deleteCommentProcess(data.comments[0].id);
    expect(typeof thunk).toBe('function');

    deleteComment.mockReturnValueOnce(Promise.resolve());

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(() => {
      expect(deleteComment).toBeCalled();
      expect(dispatch).toBeCalledWith({
        type: 'DELETE_COMMENT_COMPLETED',
        noteId: data.comments[0].id
      });
    });
  });
});
