require('dotenv').config();
const { Pool } = require('pg');
const { nanoid } = require('nanoid');

class ProductsService {
  constructor() {
    this._pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }, // Required for Neon and most cloud DBs
    });
  }

  /**
 * @TODO 3
 * Define function to save product
 */
  async addProduct({ name, price, stock }) {
    const id = nanoid(16);
    const query = {
      text: 'INSERT INTO products (id, name, price, stock) VALUES ($1, $2, $3, $4) RETURNING id',
      values: [id, name, price, stock],
    };
    const result = await this._pool.query(query);
    if (!result.rows[0]) {
      throw new Error('Product gagal ditambahkan');
    }
    return result.rows[0].id;
  }

  async getAllProducts() {
    const result = await this._pool.query('SELECT * FROM products');

    if (!result.rows.length) {
      console.log('Produk tidak ditemukan');
    }
    console.log(result);

    return result.rows;
  }

  async getOneProduct(id) {
    const query = {
      text: 'SELECT * FROM products WHERE id = $1',
      values: [id],
    };

    const result = await this._pool.query(query);
    return result.rows[0];
  }
}

module.exports = ProductsService;
