const express = require('express')
const path = require('path')
const graphqlHTTP = require('express-graphql')
const webpack = require("webpack")
const WebpackDevServer = require("webpack-dev-server")
const compiler = require('../webpack.config')

const { schema } = require('./schema')

const PORT = process.env.PORT || 3000
const server = express()

server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true 
}))

server.listen(PORT, () => console.log(`GraphQL server listening on: ${PORT}`))

const app = new WebpackDevServer(compiler, {
  proxy: {'/graphql': `http://localhost:${PORT}`},
  contentBase: path.resolve(__dirname, '../src'),
  stats: { colors: true }
})

app.use("/", express.static("./dist"))

app.listen(8080, () => console.log(`The app server is running on port ${8080}`))