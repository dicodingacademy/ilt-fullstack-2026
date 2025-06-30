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
     * This route can be access by authenticated users
    */
  },
];

module.exports = routes;
