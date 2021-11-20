// gulp的配置文件

// 引入gulp
const gulp = require('gulp')
// jshint检查语法规范
const jshint = require('gulp-jshint')
// babel 将es6模块化,转成commonjs
const babel = require('gulp-babel')

// 将commonjs编译成浏览器认识的
const browserify = require('gulp-browserify')
// 修改文件名
const rename = require('gulp-rename')
// 压缩js
const uglify = require('gulp-uglify')
// 将less编译成css
const less = require('gulp-less')
// 处理css的兼容性问题
const LessAutoprefix = require('less-plugin-autoprefix')
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] }) // 所有内核的浏览器往前兼容两个版本

// 合并文件
const concat = require('gulp-concat')
// 压缩css
const cssmin = require('gulp-cssmin')
// 压缩html
const htmlmin = require('gulp-htmlmin')
// 浏览器自动刷新的插件
const livereload = require('gulp-livereload')
// 开启一个开发服务器
const connect = require('gulp-connect')
// 自动打开浏览器的插件
const opn = require('opn')

// 定义任务
// 注意: 默认会提示警告信息,如果回调函数中返回一个流对象,就可以忽略警告
// gulp.task('xxx', async () => {
//   console.log('gulp的xxx任务执行了')
// })

gulp.task('lint', function () {
  return gulp
    .src('./src/js/*.js')
    .pipe(
      jshint({
        esversion: 6, //使用es6语法,
        asi: true, //可以不添加分号
        eqeqeq: true, // 必须使用 全等===
      })
    )
    .pipe(jshint.reporter('default'))
    .pipe(livereload())
})

gulp.task(
  'babel',
  () =>
    gulp
      .src('./src/js/*.js')
      .pipe(
        babel({
          //进行语法转换
          presets: ['@babel/env'],
        })
      )
      .pipe(gulp.dest('build/js')) //输出到指定目录
      .pipe(livereload())
)

gulp.task('browserify', function () {
  return gulp
    .src('./build/js/index.js')
    .pipe(browserify()) //将CommonJs语法转换为浏览器能识别的语法
    .pipe(rename('built.js')) //为了防止冲突将文件重命名
    .pipe(gulp.dest('build/js')) //输出到指定位置
    .pipe(livereload())
})

gulp.task('uglify', function () {
  return gulp
    .src('build/js/built.js')
    .pipe(uglify()) //压缩js
    .pipe(rename('dist.min.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload())
})

gulp.task('less', function () {
  return gulp
    .src('./src/less/*.less')
    .pipe(
      less({
        plugins: [autoprefix], //自动扩展前缀
      })
    )
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload())
})

gulp.task('concat', function () {
  return gulp
    .src('./build/css/*.css')
    .pipe(concat('built.css'))
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload())
})

gulp.task('cssmin', function () {
  return gulp
    .src('build/css/built.css')
    .pipe(cssmin())
    .pipe(rename('dist.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload())
})

gulp.task('htmlmin', () => {
  return gulp
    .src('src/index.html')
    .pipe(
      htmlmin({
        collapseWhitespace: true, //去除空格
        removeComments: true, //去除注释
      })
    )
    .pipe(gulp.dest('dist'))
    .pipe(livereload())
})

//自动执行任务，编译代码
gulp.task('watch', function () {
  //1. 在所有可能要执行任务后面加上 .pipe(livereload());
  //2. 配置watch任务
  livereload.listen()
  //通过自己服务器打开项目，自动刷新
  connect.server({
    root: 'dist',
    port: 3000,
    livereload: true, // 自动刷新
  })
  //自动打开浏览器
  opn('http://localhost:3000/index.html')
  //监视指定文件（第一个参数），一旦文件发生变化，就自动执行后面的任务（第二个参数）
  gulp.watch('src/less/*.less', gulp.series(['less', 'concat', 'cssmin']))
  gulp.watch(
    './src/js/*.js',
    gulp.series(['lint', 'babel', 'browserify', 'uglify'])
  )
  gulp.watch('./src/index.html', gulp.series('htmlmin'))
})

// 一次执行多个任务. 注意: default比较特殊,如果任务叫default,那么在执行的时候,就不需要写任务名
gulp.task(
  'default',
  gulp.series(
    'lint',
    'babel',
    'browserify',
    'uglify',
    'less',
    'concat',
    'cssmin',
    'htmlmin',
    'watch'
  )
)
