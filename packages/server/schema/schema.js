import { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLList, GraphQLSchema } from 'graphql'
import { setMines } from '../utilities'

const GameType = new GraphQLObjectType({
  name: 'game',
  fields: () => ({
    game_id: { type: GraphQLID },
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
      args: { game_id: { type: GraphQLID } },
      resolve(parent, args, { models }) {
        return models.Game.findOne({ where: args.game_id })
      }
    },
    games: {
      type: new GraphQLList(GameType),
      resolve(parent, args, { models }) {
        return models.Game.findAll()
      }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addGame: {
      type: GameType,
      resolve(parent, args, { models }) {
        let mines = setMines()
        return models.Game.create({ mines })
      }
    },
    updateGame: {
      type: GameType,
      args: { game_id: { type: GraphQLID },
              flags: { type: GraphQLList(GraphQLInt) },
              moves: { type: GraphQLList(GraphQLInt) } },
      resolve(parent, args, { models }) {
        return models.Game.update(args, { where: { game_id } })
      }
    }
  }
})

export default new GraphQLSchema({
  mutation: Mutation,
  query: RootQuery
})