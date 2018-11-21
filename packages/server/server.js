const express = require('express')
// const graphqlHTTP = require('express-graphql')
const bodyParser = require('body-parser')
const { graphqlExpress } = require('graphql-server-express')
// const { makeExecutableSchema } = require('graphql-tools')
const schema = require('./schema/schema')

const app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('Now listening on port 4000')
})