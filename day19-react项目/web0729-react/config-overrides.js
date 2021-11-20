const {
  override,
  fixBabelImports,
  addPostcssPlugins,
} = require('customize-cra')

module.exports = override(
  // antd按需加载
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      style: 'css',
    }),
  // rem适配. 将px改为rem
  // remUnit 决定了使用rem适配方式一还是方式二
  // 方式一: 100
  // 方式二: 37.5
  // 注意: 需要和计算根标签字体大小的代码保持一致
  addPostcssPlugins([require('postcss-px2rem')({ remUnit: 100 })])
)
