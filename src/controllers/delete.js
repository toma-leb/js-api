export default async function destroy(object, params) {
  const { id } = params;

  await object.destroy({
    where: {
      id,
    },
  });
}
