const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql')

const express = require('express')
const graphqlHTTP = require('express-graphql')

const PORT = process.env.PORT || 3000
const server = express()

const userType = new GraphQLObjectType({
  name: 'UserType',
  description: 'The user type',
  fields: {
    id: {
      type: GraphQLID
    },
    username: {
      type: GraphQLString
    },
    number_of_posts: {
      type: GraphQLInt
    },
    active: {
      type: GraphQLBoolean
    }
  }
})

const queryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root query type',
  fields: {
    user: {
      type: userType,
      resolve: () => new Promise((resolve) => {
        resolve({
          id: 1,
          username: 'ryanwestlake',
          number_of_posts: 21,
          active: true
        })
      })
    }
  }
})

const schema = new GraphQLSchema({
  query: queryType
})

const appUsers = [
  {
    id: 10,
    username: 'ryanwestlake',
    number_of_posts: 11,
    active: true
  },
  {
    id: 12,
    username: 'fredk',
    number_of_posts: 2,
    active: false
  },
  {
    id: 11,
    username: 'sarahjoy',
    number_of_posts: 32,
    active: true
  }
]

server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
