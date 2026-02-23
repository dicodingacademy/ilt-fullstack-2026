import express from 'express';
import routes from './routes.js';
import ProductsController from './controller.js';
import ProductsService from './ProductsService.js';
import dotenv from 'dotenv';

dotenv.config();

const init = async () => {
  const app = express();
  const port = 3000;

  app.use(express.json());

  const productsService = new ProductsService();
  const productsController = new ProductsController(productsService);
  const router = express.Router();
  
  routes(productsController, router);
  app.use(router);

  app.listen(port, 'localhost', () => {
    console.log(`Server berjalan pada http://localhost:${port}`);
  });
};

init();