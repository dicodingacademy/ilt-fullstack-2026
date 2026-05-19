const routes = (router, controller) => {
  router.post('/', controller.postAuthenticationHandler);
  router.put('/', controller.putAuthenticationHandler);
  router.delete('/', controller.deleteAuthenticationHandler);
};

export default routes;
