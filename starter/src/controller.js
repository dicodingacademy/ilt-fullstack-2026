class ProductsController {
  constructor(service) {
    this._service = service;
  }

  /**
 * @TODO 2
 * Define controller for post product
 */

  async getAllProducts(req, res) {
    const products = await this._service.getAllProducts();
    res.status(201).json({
      status: 'success',
      message: 'Product berhasil ditampilkan',
      data: {
        products
      },
    });
  }

  async getOneProduct(req, res) {
    const { id } = req.params;
    const product = await this._service.getOneProduct(id);

    res.status(200).json({
      status: 'success',
      message: 'Product berhasil ditampilkan',
      data: {
        product
      }
    });
  }
}

export default ProductsController;
