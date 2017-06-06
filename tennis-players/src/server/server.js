const express = require('express')
const graphqlHTTP = require('express-graphql')
const { schema } = require('./schema')

const PORT = process.env.PORT || 3000
const server = express()

server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
