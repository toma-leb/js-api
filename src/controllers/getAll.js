let items;

export default async function getAll(object, headers) {
  const page = headers.range.split('-');

  await object.findAll().then((exist) => { items = exist.slice(page[0] - 1, page[1]); });

  return items;
}
