export default function recordToPost(record) {
  return {
    id: record.id,
    title: record.fields.title,
    description: record.fields.description,
    author: record.fields.author,
    count: record.fields.count
  };
}
