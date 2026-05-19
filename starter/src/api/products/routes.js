const routes = (router, controller) => {
  router.post('/', controller.postProductHandler);
  /**
   * @TODO 1
   * Define configuration for the POST /products route
   * The configuration should include:
   * Permission to access the route only for authenticated users and the role 'ADMIN'
   */

  router.get('/', controller.getProductsHandler);
  /**
   * @TODO 2
   * Define configuration for the GET /products route
   * This route can be access by authenticated users
   */
};

export default routes;
