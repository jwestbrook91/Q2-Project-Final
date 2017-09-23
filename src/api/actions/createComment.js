import recordToComment from './utils/recordToComment';

export default function createComment(newComment) {
  return fetch(`https://api.airtable.com/v0/appUe73zYzkST3zzm/Comments`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer key7xuxEaJfKu00Al',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      fields: {
        id: newComment.id,
        body: newComment.description,
        author: newComment.author
      }
    })
  })
    .then(response => {
      return response.json();
    })
    .then(recordToComment);
}
