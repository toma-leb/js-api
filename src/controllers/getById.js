let item;

export default async function getById(object, params) {
  const { id } = params;

  await object.findOne({
    where: { id },
  }).then((exist) => { item = exist; });

  return item;
}
