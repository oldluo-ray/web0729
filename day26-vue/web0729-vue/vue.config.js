// 里面写的内容,会覆盖vue脚手架中的webpack配置项
module.exports = {
  // 直接写配置项
  lintOnSave: false, //关闭语法检查.
  //   配置代理服务器:
  devServer: {
    // 简写配置:
    // proxy: 'http://localhost:5000',
    // 详细配置:
    proxy: {
      '/xxx': {
        target: 'http://localhost:5000',
        // 默认8080给5000发的路径还是/xxx/test
        // 希望8080给5000发的路径是/test.所以要配置pathRewrite
        pathRewrite: { '^/xxx': '' },
        changeOrigin: true,
      },
      '/yyy': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/yyy': '' },
        changeOrigin: false,
      },
    },
  },
}
