const {ApolloServer, gql} = require("apollo-server-express");//import library 
const { typeDefs } = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/Resolvers");
const express = require('express')//import express
const app = express();//create app var 
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

//instanciate graphql server
const server = new ApolloServer({ typeDefs, resolvers})
async () => {
    await server.start()
    .then(
        server.applyMiddleware({ app })// server is the middleware  and is being applied to the app variable 
    )
}
app.get("/", (req,res) => {
    res.send("Hello World")
})
// app.use();
app.use('/graphql', graphqlHTTP({
    schema: typeDefs,
    graphiql: true,
  }));
app.listen({ port: 3001 }, () => {
    console.log("Server running on port 3001")
})