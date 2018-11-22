import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
// import { makeExecutableSchema } from 'graphql-tools'

import models from './models'
import schema from './schema/schema'
// import resolvers from './resolvers'
// import typeDefs from './schema'

// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers
// })

const app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  context: { models }
  // graphiql: true
}))

// app.use('/graphql', bodyParser.json(), graphiqlExpress({ schema }))

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))


models.sequelize.sync().then(() => app.listen(4000, () => {
    console.log('Now listening on port 4000')
  }))




// import express from 'express'
// import bodyParser from 'body-parser'
// import models from './models'
// // const graphqlHTTP = require('express-graphql')
// import { graphqlExpress } from 'graphql-server-express'
// import { makeExecutableSchema } from 'graphql-tools'
// import schema from './schema/schema'

// const app = express()

// app.use('/graphql', bodyParser.json(), graphqlExpress({
//   schema,
//   context: { models },
//   graphiql: true
// }))

// models.sequelize.sync().then(() => app.listen(4000, () => {
//   console.log('Now listening on port 4000')
// }))