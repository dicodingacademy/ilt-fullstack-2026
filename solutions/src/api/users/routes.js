import { authenticate } from '../../middleware/authMiddleware.js';

const routes = (router, controller) => {
  router.post('/', controller.postUserHandler);
  router.get('/:id', authenticate, controller.getUserByIdHandler);
};

export default routes;
