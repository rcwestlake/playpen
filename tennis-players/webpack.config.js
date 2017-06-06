const path = require('path')
const webpack = require('webpack')

module.exports = webpack({
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
 module: {
    rules: [
      {
        test: /\.js|jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
})