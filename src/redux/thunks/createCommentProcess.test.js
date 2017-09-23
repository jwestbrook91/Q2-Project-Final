import createCommentProcess from './createCommentProcess';

jest.mock('../../api/createComment');
import createComment from '../../api/createComment';

import data from '../../mock-data-comments';

describe('createCommentProcess', () => {
  it('Calls createComment API utility, returns the newly created comment, and dispatches CREATE_COMMENT_COMPLETED action', () => {
    const { id, ...commentWithoutId } = data.comments[0];
    const thunk = createCommentProcess(commentWithoutId);
    expect(typeof thunk).toBe('function');

    createComment.mockReturnValueOnce(Promise.resolve({ ...data.posts[0] }));

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(createdComment => {
      expect(createComment).toBeCalled();
      expect(createdComment).toEqual({ ...data.comments[0] });
      expect(dispatch).toBeCalledWith({
        type: 'CREATE_COMMENT_COMPLETED',
        comment: createdComment
      });
    });
  });
});
