const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const InvariantError = require('../exceptions/InvariantError');

class ProductsService {
  constructor() {
    this._pool = new Pool();
  }

  async addProduct({ name, description, category, price, brand }) {
    const id = `product-${nanoid(16)}`;
    const query = {
      text: 'INSERT INTO products VALUES($1, $2, $3, $4, $5, $6) RETURNING id',
      values: [id, name, description, category, price, brand],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new InvariantError('Produk gagal ditambahkan');
    }
    return result.rows[0].id;
  }

  async getAllProducts() {
    const query = {
      text: 'SELECT * FROM products',
    };

    const result = await this._pool.query(query);

    return result.rows;
  }
}

module.exports = ProductsService;
