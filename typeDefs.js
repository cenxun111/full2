const { gql } = require("apollo-server-express");
const typeDefs = gql`
type Card {
    id: ID
    name:String
    genre:String
    year:String
}
type Query{
    hello:String 

    getAllCard:[Card]
    getCard(id:ID): Card
    
}

type Mutation {
    createCard(name:String!
        genre:String!
        year:String!): Card!

        deleteCard(id:ID):String
}
`;

module.exports = typeDefs;
