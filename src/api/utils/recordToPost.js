export default function recordToPost(record) {
  return {
    id: record.id,
    title: record.fields.title,
    body: record.fields.description,
    count: record.fields.count
  };
}
