const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')

const server = express()

server.use('/graphql', graphqlHTTP({
  schema
}))

server.listen(4000, () => {
  console.log('Now listening on port 4000')
})