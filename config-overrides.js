const {
  override,
  addPostcssPlugins,
  addWebpackAlias,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  addPostcssPlugins([
    require('postcss-px2rem-exclude')({
      remUnit: 75, //设计图大小
      remPrecision: 2, //只转换到两位小数
      exclude: /node_modules/i, //插件不需要转rem
    }),
  ]),
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
  }),
);
