const ClientError = require('../../exceptions/ClientError');

class ProductsHandler {
  constructor(service) {
    this._service = service;

    this.postProductHandler = this.postProductHandler.bind(this);
    this.getProductsHandler = this.getProductsHandler.bind(this);
  }

  async postProductHandler(request, h) {
    try {
      const { name, description, category, price, brand } = request.payload;

      const product = await this._service.addProduct({ name, description, category, price, brand });

      const response = h.response({
        status: 'success',
        message: 'Produk berhasil ditambahkan',
        data: {
          product,
        },
      });
      response.code(201);
      return response;
    } catch (error) {
      if (error instanceof ClientError) {
        const response = h.response({
          status: 'fail',
          message: error.message,
        });
        response.code(error.statusCode);
        return response;
      }

      // Server ERROR!
      const response = h.response({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami.',
      });
      response.code(500);
      console.error(error);
      return response;
    }
  }

  async getProductsHandler(request, h) {
    try {
      const products = await this._service.getAllProducts();
      return {
        status: 'success',
        data: {
          products,
        },
      };
    } catch (error) {
      if (error instanceof ClientError) {
        const response = h.response({
          status: 'fail',
          message: error.message,
        });
        response.code(error.statusCode);
        return response;
      }

      // server ERROR!
      const response = h.response({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami.',
      });
      response.code(500);
      console.error(error);
      return response;
    }
  }
}

module.exports = ProductsHandler;