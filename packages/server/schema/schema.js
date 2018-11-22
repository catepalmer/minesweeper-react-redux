import { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLList, GraphQLSchema } from 'graphql'
import { Game } from '../models'
import { setMines } from '../utilities'

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
      resolve(parent, args, { models }) {
        models.Game.findOne({ where: args.id })
      }
    },
    games: {
      type: new GraphQLList(GameType),
      resolve(parent, args, { models }) {
        models.Game.findAll()
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
        const mines = setMines()
        models.Game.create({ mines })
      }
    },
    updateGame: {
      type: GameType,
      args: { id: { type: GraphQLID },
              flags: { type: GraphQLList(GraphQLInt) },
              moves: { type: GraphQLList(GraphQLInt) } },
      resolve(parent, args, { models }) {
        models.Game.update(args, { where: { id } })
      }
    }
  }
})

export default new GraphQLSchema({
  mutation: Mutation,
  query: RootQuery
})


// export default `
//   type Game {
//     id: Int!
//     flags: [Int!]
//     mines: [Int!]
//     moves: [Int!]
//     createdAt: String!
//     updatedAt: String!
//   }

//   type Query {
//     game(id: Int!): Game
//     games: [Game!]!
//   }

//   type Mutation {
//     createGame(mines: [Int!]): Game
//     updateGame(id: Int!, flags: [Int!], moves: [Int!]): [Int!]!
//   }`




// const { GraphQLObjectType,
//   GraphQLID,
//   GraphQLInt,
//   GraphQLList,
//   GraphQLSchema } = require('graphql')

// const { Game } = require('../models')

// const { setMines } = require('../utilities')

// // const { find } = require('ramda')

// const GameType = new GraphQLObjectType({
//   name: 'game',
//   fields: () => ({
//     id: { type: GraphQLID },
//     flags: { type: new GraphQLList(GraphQLInt) },
//     mines: { type: new GraphQLList(GraphQLInt) },
//     moves: { type: new GraphQLList(GraphQLInt) }
//   })
// })

// const RootQuery = new GraphQLObjectType({
//   name: 'RootQueryType',
//   fields: {
//     game: {
//       type: GameType,
//       args: { id: { type: GraphQLID } },
//       resolve(parent, args, { models }) {
//         models.Game.findOne({ where: args.id })
//         // return find(game => game.id === args.id)(games)
//         // code to get data from db
//       }
//     },
//     games: {
//       type: new GraphQLList(GameType),
//       resolve(parent, args, { models }) {
//         // return games
//         models.Game.findAll()
//       }
//     }
//   }
// })

// const Mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
//     addGame: {
//       type: GameType,
//       // args: {
//         // flags: { type: new GraphQLList(GraphQLInt) },
//         // mines: setMines(),
//       //   moves: { type: new GraphQLList(GraphQLInt) }
//       // },
//       resolve(parent, args, { models }) {
//         // let game = new Game({
//         //   mines: setMines()
//         // })
//         // let mines = setMines()
//         // models.Game.create({ mines })
//         models.Game.create()
//       }
//     },
//     updateGame: {
//       type: GameType,
//       args: { id: { type: GraphQLID } },
//       // args: {
//       //   id,
//       //   flags,
//       //   mines,
//       //   moves
//       // },
//       resolve(parent, args, { models }) {
//         models.Game.update(args, { where: { id } })
//       }
//     }
//   }
// })

// export default new GraphQLSchema({
//   mutation: Mutation,
//   query: RootQuery
// })