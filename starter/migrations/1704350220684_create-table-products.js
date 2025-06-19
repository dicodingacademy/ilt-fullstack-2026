/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('products', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    name: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    description: {
      type: 'VARCHAR(50)',
      notNull: false,
    },
    category: {
      type: 'VARCHAR(20)',
      notNull: false,
    },
    price_per_unit: {
      type: 'INT',
      notNull: true,
    },
    brand: {
      type: 'VARCHAR(50)',
      notNull: true
    }
  });
};

exports.down = (pgm) => {
  pgm.dropTable('products');
};
