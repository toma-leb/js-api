let item;

export default async function post(object, body) {
  await object.create(body).then((created) => { item = created; });

  return item;
}
