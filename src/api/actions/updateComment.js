import recordToComment from './utils/recordToComment';

export default function updatePost(id, changes) {
  return fetch(`https://api.airtable.com/v0/appUe73zYzkST3zzm/Comments/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer key7xuxEaJfKu00Al',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: changes
    })
  })
    .then(response => response.json())
    .then(record => recordToComment(record));
}
