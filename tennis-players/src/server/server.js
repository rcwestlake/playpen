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
const { getPlayers, getPlayerById, addPlayer } = require('../data/data')

const PORT = process.env.PORT || 3000
const server = express()

const playerType = new GraphQLObjectType({
  name: 'PlayerType',
  description: 'The user type',
  fields: {
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    number_of_wins: {
      type: GraphQLInt
    }
  }
})

const queryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root query type',
  fields: {
    players: {
      type: new GraphQLList(playerType),
      resolve: getPlayers
    },
    player: {
      type: playerType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: 'Id of the user'
        }
      },
      resolve: (_, args) => {
        return getPlayerById(args.id)
      }
    }
  }
})

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'The root mutation',
  fields: {
    createPlayer: {
      type: playerType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        },
        name: {
          type: new GraphQLNonNull(GraphQLString)
        },
        number_of_wins: {
          type: GraphQLInt
        }
      },
      resolve: (_, args) => {
        return addPlayer(args)
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
