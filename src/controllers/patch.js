let item;

export default async function patch(object, body) {
  await object.update({
    body,
  }).then((updated) => { item = updated; });

  return item;
}
