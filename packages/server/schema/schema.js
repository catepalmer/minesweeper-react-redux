const { GraphQLObjectType,
        GraphQLID,
        GraphQLInt,
        GraphQLList,
        GraphQLSchema } = require('graphql')

const { find } = require('ramda')

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
      resolve(parent, args, context) {
        return find(game => game.id === args.id)(games)
        // code to get data from db
      }
    },
    games: {
      type: new GraphQLList(GameType),
      resolve(parent, args, context){
        return games
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: RootQuery
})