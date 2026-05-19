const routes = (router, controller) => {
  router.post('/', controller.postUserHandler);
  router.get('/:id', controller.getUserByIdHandler);
  /**
   * @TODO 3
   * Define configuration for the GET /users/:id route
   * This route can be access by authenticated users
   */
};

export default routes;
