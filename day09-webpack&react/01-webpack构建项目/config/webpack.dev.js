const { resolve, join } = require('path')

// 引入打包html文件的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // 入口
  entry: './src/js/index.js',
  // 出口
  output: {
    // 输出的js文件的名称
    filename: 'js/main.js',
    // 将打包后的js文件,输出到哪里
    path: resolve('build'),
    // 定义所有的静态资源打包之后的路径
    assetModuleFilename: 'assets/[hash:8][ext]',
    // 删除打包之后的旧文件
    clean: true,
  },
  // 模式
  mode: 'development',
  // 加载器
  module: {
    rules: [
      // 检查js语法规范的加载器
      {
        test: /\.js$/, // 只检测js文件
        exclude: /node_modules/, // 排除node_modules文件夹
        enforce: 'pre', // 提前加载使用
        use: {
          // 使用eslint-loader解析
          loader: 'eslint-loader',
        },
      },
      // webpack只能处理es6模块化的语法,其他的语法无法处理,所以要使用babel-loader处理js的兼容性问题
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // 处理less的loader
      // less-loader 将less编译成css
      // css-loader 将css以commonjs的形式添加到main.js中
      // style-loader 将css以内嵌的形式添加到网页上
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      // 处理css文件
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // 处理样式中的图片资源
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            // 这个配置项,会将小于8kb的图片,转成base64格式,目的是为了减少请求服务器次数
            // 注意: 并不是说,小于8kb的图片,转成base64之后,体积一定会变小
            maxSize: 8 * 1024, // 小于8kb以下的图片会被打包成base64格式
          },
        },
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: [/\.ttf$/],
        type: 'asset/resource',
      },
    ],
  },
  // 插件
  // 将src中的html,打包到build中
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  // 自动编译服务器
  devServer: {
    // contentBase: './build', // 打包根路径
    static: {
      directory: join(__dirname, 'build'),
    },
    port: 8080, // 端口号
    open: true, // 自动打开浏览器
  },
}
