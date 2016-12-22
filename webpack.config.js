module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "build.js",
    path: __dirname + '/build/',
    publicPath: "/build2/"
  },
  module: {
    loaders: [
       //.css 文件使用 style-loader 和 css-loader 来处理
      { test: /\.css$/, loader: "style!css" },
      { test: /\.less$/, loader: "style!css!less" },

      //.js 文件使用 jsx-loader 来编译处理
      { test: /\.js$/,    loader: "jsx-loader" },

      // 将样式中引用到的图片转为模块来处理; 配置信息的参数“?limit=8192”表示将所有小于8kb的图片都转为base64形式。
      {test: /.(png|jpg)$/, loader: 'url-loader?limit=8192'},

      // BABEL es6 解析器
      { test: /\.js$/, loader:'babel', 
        exclude: '/(node_modules|bower_components)/', 
        query: { presets: ['react', 'es2015']}
      }

    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    //模块别名定义，方便后续直接引用别名，无须多写长长的地址
    alias: {
        a : 'js/assets/a.js',  // 后面直接引用 require(“a”)即可引用到模块
        b : 'js/assets/b.js',
        c : 'js/assets/c.js'
    }
  },
  plugins: []
};