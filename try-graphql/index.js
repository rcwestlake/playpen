const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLList
} = require('graphql')

const express = require('express')
const graphqlHTTP = require('express-graphql')
const { getUserById, getUsers, addUser } = require('./data')

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
    users: {
      type: new GraphQLList(userType),
      resolve: getUsers
    },
    user: {
      type: userType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: 'Id of the user'
        }
      },
      resolve: (_, args) => {
        return getUserById(args.id)
      }
    }
  }
})

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'The root mutation',
  fields: {
    createUser: {
      type: userType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        },
        username: {
          type: new GraphQLNonNull(GraphQLString)
        },
        number_of_posts: {
          type: GraphQLInt
        },
        active: {
          type: new GraphQLNonNull(GraphQLBoolean)
        }
      },
      resolve: (_, args) => {
        return addUser(args)
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType
})

server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
