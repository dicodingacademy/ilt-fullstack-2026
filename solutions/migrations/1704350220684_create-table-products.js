/* eslint-disable camelcase */

export const shorthands = undefined;

export const up = (pgm) => {
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

export const down = (pgm) => {
  pgm.dropTable('products');
};
