export const typeDefs = `#graphql
  type Game {
    id: ID!
    name: String!
    description: String
    releaseDate: String
    platforms: [String!]!
  }
  type Review {
    id: ID!
    rating: Int!
    comment: String!
    game: Game!
    author: Author!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }
  type Query {
    reviews: [Review!]
    games: [Game!]
    authors: [Author!]
    game(id: ID!): Game
    author(id: ID!): Author
  }
  type Mutation {
    addGame(name: String!, description: String, releaseDate: String, platforms: [String!]!): Game!
    addReview(rating: Int!, comment: String!, gameId: ID!, authorId: ID!): Review!
  }
`;
