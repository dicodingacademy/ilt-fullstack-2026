const routes = (handler) => [
  /**
 * @TODO 1
 * Define route for POST method
 */
  {
    method: 'POST',
    path: '/products',
    handler: handler.addProductHandler,
  },
  {
    method: 'GET',
    path: '/products',
    handler: handler.getAllProductsHandler,
  },
  {
    method: 'GET',
    path: '/products/{id}',
    handler: handler.getOneProductHandler,
  }
];

module.exports = routes;