const express = require('express')
const path = require('path')
const graphqlHTTP = require('express-graphql')
const webpack = require("webpack")
const WebpackDevServer = require("webpack-dev-server")

const { schema } = require('./server/schema')

const PORT = process.env.PORT || 3000
const server = express()

server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true 
}))

server.listen(PORT, () => console.log(`GraphQL server listening on: ${PORT}`))

const compiler = webpack({
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

const app = new WebpackDevServer(compiler, {
 proxy: {"/graphql": `http://localhost:${PORT}`},
 contentBase: path.resolve(__dirname, './src'),
 stats: {colors: true}
})

app.use("/", express.static("./dist"))

app.listen(8080, () => console.log(`The app server is running on port ${8080}`))