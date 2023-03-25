import post from './post';
import patch from './patch';

let item;

export default async function put(object, body) {
  const { id } = body;

  await object.findOne({
    where: {
      id,
    },
  }).then(async (exist) => {
    item = (exist == null) ? post(body) : patch(body);
  });

  return item;
}
