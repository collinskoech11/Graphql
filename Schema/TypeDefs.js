const { gql } = require("apollo-server-express");// initiate a type definition

const typeDefs = gql`
    type User {
        name: String!
        age: Int!
        married: Boolean!
    }

    # Queries 
    type Query {
        getAllUsers: [User!]!
    }

    # Mutations 
    
`
module.exports = { typeDefs };