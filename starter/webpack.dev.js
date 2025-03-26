const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    static: './dist',
    watchFiles: ['./public', './index.html'],
  },
});

