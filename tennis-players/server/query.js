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
const { getPlayers, getPlayerById, addPlayer } = require('../src/data/data')

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

exports.queryType = queryType
exports.mutationType = mutationType