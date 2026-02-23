const routes = (controller, router) => {
  router.post('/products', (req, res) => controller.addProduct(req, res));
  router.get('/products', (req, res) => controller.getAllProducts(req, res));
  router.get('/products/:id', (req, res) => controller.getOneProduct(req, res));
  
  return router;
};

export default routes;