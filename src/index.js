import express from 'express';
import config from './config';
import Endpoints from './endpoints';
import Snake from './models/snake';
import User from './models/user';

const router = express();

router.use(express.json());

const snakes = new Endpoints('snakes', Snake);
snakes.basic(router);
snakes.addUpdate(router);

const users = new Endpoints('users', User);
users.basic(router);

router.use((_req, res, next) => {
  res.status(404).json({ error: 'URL not found' });
  next();
});

try {
  router.listen(config.NODE_APP_PORT);
} catch (error) {
  throw new Error(`Enable to listen on port ${config.NODE_APP_PORT}`);
}
