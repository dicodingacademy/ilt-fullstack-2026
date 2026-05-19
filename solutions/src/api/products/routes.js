import { authenticate, authorize } from '../../middleware/authMiddleware.js';

const routes = (router, controller) => {
  router.post('/', authenticate, authorize('ADMIN'), controller.postProductHandler);
  router.get('/', authenticate, controller.getProductsHandler);
};

export default routes;
