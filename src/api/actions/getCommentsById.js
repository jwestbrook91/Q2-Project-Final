import recordToComment from './utils/recordToComment';

export default function getCommentsById(id) {
  return fetch(`https://api.airtable.com/v0/appUe73zYzkST3zzm/Comments`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer key7xuxEaJfKu00Al`
    }
  })
    .then(response => response.json())
    .then(data => data.records.map(recordToComment));
}
