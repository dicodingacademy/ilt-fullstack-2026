import { Router } from 'express';
import UsersController from './controller.js';
import routes from './routes.js';

const usersRouter = ({ service }) => {
  const router = Router();
  const usersController = new UsersController(service);

  routes(router, usersController);

  return router;
};

export default usersRouter;
