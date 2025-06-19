const routes = (handler) => [
  {
    method: 'POST',
    path: '/products',
    handler: handler.postProductHandler,
    config: {
      auth: 'ecommerce_app',
      plugins: {
        hacli: {
          permissions: ['ADMIN']
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/products',
    handler: handler.getProductsHandler,
    config: {
      auth: 'ecommerce_app'
    }
  }
];

module.exports = routes;
