// mengimpor dotenv dan menjalankan konfigurasinya
import 'dotenv/config';

import express from 'express';

// users
import usersRouter from './api/users/index.js';
import UsersService from './services/UsersService.js';

// authentications
import authenticationsRouter from './api/authentications/index.js';
import AuthenticationsService from './services/AuthenticationsService.js';
import TokenManager from './tokenize/TokenManager.js';

// products
import productsRouter from './api/products/index.js';
import ProductsService from './services/ProductsService.js';

const init = async () => {
  const usersService = new UsersService();
  const authenticationsService = new AuthenticationsService();
  const productsService = new ProductsService();

  const app = express();

  // middleware
  app.use(express.json());

  // routes
  app.use('/users', usersRouter({ service: usersService }));
  app.use('/authentications', authenticationsRouter({
    authenticationsService,
    usersService,
    tokenManager: TokenManager,
  }));
  app.use('/products', productsRouter({ service: productsService }));

  const port = process.env.PORT;
  const host = process.env.HOST;

  app.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
  });
};

init();
