import recordToPost from './utils/recordToPost';

export default function createPost(newPost) {
  return fetch(`https://api.airtable.com/v0/appUe73zYzkST3zzm/Posts`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer key7xuxEaJfKu00Al',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      fields: {
        id: newPost.id,
        title: newPost.title,
        description: newPost.description,
        count: newPost.count,
        comments: newPost.comments
      }
    })
  })
    .then(response => {
      return response.json();
    })
    .then(recordToPost);
}
