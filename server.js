const express = require('express'),
      graphqlHTTP = require('express-graphql'),
      {buildSchema} = require('graphql')

let schema = buildSchema(`
  type Query {
    hello : String
  }
`)

let root = {
  hello : () => {
    return 'Hello World';
  }
}

const app = express()
app.use('/graphql', graphqlHTTP({
  schema : schema,
  rootValue : root,
  graphiql : true,
}))

app.listen(4000)
console.log('Magic happen at localhost:4000');
