export default function deleteComment(id) {
  return fetch(`https://api.airtable.com/v0/appUe73zYzkST3zzm/Comments/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer key7xuxEaJfKu00Al'
    }
  })
    .then(response => response.json())
    .then(result => result.deleted);
}
