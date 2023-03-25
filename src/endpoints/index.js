import getAll from '../controllers/getAll';
import getById from '../controllers/getById';
import post from '../controllers/post';
import patch from '../controllers/patch';
import put from '../controllers/put';
import destroy from '../controllers/delete';

export default class Endpoints {
  constructor(endpoint, object) {
    this.endpoint = endpoint;
    this.object = object;
  }

  async wrapper(func, input, res) {
    try {
      await func(this.object, input).then((items) => res.status(200).send(items));
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  basic(router) {
    router.get(`/${this.endpoint}`, async (req, res) => {
      await this.wrapper(getAll, req.headers, res);
    });
    router.get(`/${this.endpoint}/:id`, async (req, res) => {
      await this.wrapper(getById, req.params, res);
    });
    router.post(`/${this.endpoint}`, async (req, res) => {
      delete req.body.id;
      await this.wrapper(post, req.body, res);
    });
    router.delete(`/${this.endpoint}/:id`, async (req, res) => {
      await this.wrapper(destroy, req.params, res);
    });
  }

  addUpdate(router) {
    router.patch(`/${this.endpoint}`, async (req, res) => {
      await this.wrapper(patch, req.body, res);
    });
    router.put(`/${this.endpoint}`, async (req, res) => {
      await this.wrapper(put, req.body, res);
    });
  }
}
