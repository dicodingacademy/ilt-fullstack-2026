import ClientError from '../../exceptions/ClientError.js';

class ProductsController {
  constructor(service) {
    this._service = service;

    this.postProductHandler = this.postProductHandler.bind(this);
    this.getProductsHandler = this.getProductsHandler.bind(this);
  }

  async postProductHandler(req, res) {
    try {
      const { name, description, category, price, brand } = req.body;

      const product = await this._service.addProduct({ name, description, category, price, brand });

      return res.status(201).json({
        status: 'success',
        message: 'Produk berhasil ditambahkan',
        data: {
          product,
        },
      });
    } catch (error) {
      if (error instanceof ClientError) {
        return res.status(error.statusCode).json({
          status: 'fail',
          message: error.message,
        });
      }

      // Server ERROR!
      console.error(error);
      return res.status(500).json({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami.',
      });
    }
  }

  async getProductsHandler(req, res) {
    try {
      const products = await this._service.getAllProducts();
      return res.json({
        status: 'success',
        data: {
          products,
        },
      });
    } catch (error) {
      if (error instanceof ClientError) {
        return res.status(error.statusCode).json({
          status: 'fail',
          message: error.message,
        });
      }

      // server ERROR!
      console.error(error);
      return res.status(500).json({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami.',
      });
    }
  }
}

export default ProductsController;
