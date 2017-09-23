import recordToNote from './utils/recordToPost';

export default function updatePost(id, changes) {
  return fetch(`https://api.airtable.com/v0/appUe73zYzkST3zzm/Posts/${id}`, {
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
    .then(record => recordToNote(record));
}
