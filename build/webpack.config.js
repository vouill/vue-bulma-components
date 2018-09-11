const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/plugin/plugin.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'vue-bulma-components.common.js',
    library: 'vue-bulma-components',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};
