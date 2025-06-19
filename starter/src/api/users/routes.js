const routes = (handler) => [
  {
    method: 'POST',
    path: '/users',
    handler: handler.postUserHandler,
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: handler.getUserByIdHandler,
    /**
     * @TODO 3
     * Define configuration for the GET /users/{id} route
    */
  },
];

module.exports = routes;
