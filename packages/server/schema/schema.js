const graphql = require('graphql')
const { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLList, GraphQLSchema, GraphQLString } = graphql
const ramda = require('ramda')
const { find } = ramda

// dummy data
const games = [
  {id: 1, flags: [11, 19], mines: [11, 19, 50, 56, 58, 66, 70, 76, 77, 80], moves: [0, 1, 9, 10, 36, 37, 38, 39, 27, 28, 29, 30, 20, 21]},
  {id: 2, flags: [4], mines: [4, 8, 24, 27, 32, 34, 37, 43, 51, 53], moves: [0, 1, 2, 3, 9, 10, 11, 12, 18, 19, 20, 21, 22, 29, 30, 31, 13]}
]

const GameType = new GraphQLObjectType({
  name: 'game',
  fields: () => ({
    id: { type: GraphQLID },
    flags: { type: new GraphQLList(GraphQLInt) },
    mines: { type: new GraphQLList(GraphQLInt) },
    moves: { type: new GraphQLList(GraphQLInt) }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    game: {
      type: GameType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {

        const game = games.find(args.id => args.id === id)
        return game
        // code to get data from db
        // return find({ id: args.id })(games)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})