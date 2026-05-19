import { Router } from 'express';
import ProductsController from './controller.js';
import routes from './routes.js';

const productsRouter = ({ service }) => {
  const router = Router();
  const productsController = new ProductsController(service);

  routes(router, productsController);

  return router;
};

export default productsRouter;
