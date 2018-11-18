const graphql = require('graphql')
const { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLSchema } = graphql

const GameType = new GraphQLObjectType({
  name: 'Game',
  fields: () => ({
    id: { type: GraphQLID },
    flags: { type: [GraphQLInt] },
    mines: { type: [GraphQLInt] },
    moves: { type: [GraphQLInt] }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    game: {
      type: GameType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})