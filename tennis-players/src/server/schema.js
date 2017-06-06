const { GraphQLSchema } = require('graphql')
const { queryType } = require('./query')
const { mutationType } = require('./query')

const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType
})

exports.schema = schema