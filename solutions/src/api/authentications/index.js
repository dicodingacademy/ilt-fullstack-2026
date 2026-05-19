import { Router } from 'express';
import AuthenticationsController from './controller.js';
import routes from './routes.js';

const authenticationsRouter = ({ authenticationsService, usersService, tokenManager }) => {
  const router = Router();
  const authenticationsController = new AuthenticationsController(
    authenticationsService,
    usersService,
    tokenManager,
  );

  routes(router, authenticationsController);

  return router;
};

export default authenticationsRouter;
