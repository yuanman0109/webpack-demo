var path = require('path');
var webpack = require('webpack');
var ENV=String(process.env.NODE_ENV) =="development" ? true:false;
module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist')
  },
  plugins:[
    new webpack.DefinePlugin({
        'api': ENV==true ? 'http://localhost:8080':'www.baidu.com'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "/"),
    compress: true,
    port: 8080
  }
};