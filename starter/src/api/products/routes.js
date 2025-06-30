const routes = (handler) => [
  {
    method: 'POST',
    path: '/products',
    handler: handler.postProductHandler,
    /**
     * @TODO 1
     * Define configuration for the POST /products route
     * The configuration should include:
     * Permission to access the route only for authenticated users and the role 'ADMIN'
    */
  },
  {
    method: 'GET',
    path: '/products',
    handler: handler.getProductsHandler,
    /**
     * @TODO 2
     * Define configuration for the GET /products route
     * This route can be access by authenticated users
    */
  }
];

module.exports = routes;
