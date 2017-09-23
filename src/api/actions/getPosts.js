import recordToPost from './../utils/recordToPost';

export default function getPosts() {
  return fetch(`https://api.airtable.com/v0/appUe73zYzkST3zzm/Posts`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer key7xuxEaJfKu00Al`
    }
  })
    .then(response => response.json())
    .then(data => data.records.map(recordToPost));
}
