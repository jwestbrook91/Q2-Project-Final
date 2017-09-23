import get from 'lodash.get';

export default function recordToComment(record) {
  return {
    id: get(record, 'id'),
    uuid: get(record, 'fields.uuid'),
    body: get(record, 'fields.body'),
    authorId: get(record, 'fields.author')
  };
}
