const routes = (controller, router) => {
  /**
 * @TODO 1
 * Define route for POST method
 */
  router.get('/products', (req, res) => controller.getAllProducts(req, res));
  router.get('/products/:id', (req, res) => controller.getOneProduct(req, res));
  
  return router;
};

export default routes;