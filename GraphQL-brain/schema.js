export const typeDefs = `#graphql
  type Game {
  id: ID!
  name: String!
  # description: String!
  # releaseDate: String!
  platforms: [String!]!
  }
  type Review {
  id: ID!
  rating: Int!
  comment: String!
  }
  type Author {
  id: ID!
  name: String!
  verified: Boolean!
  }
  
  type Query {
    reviews: [Review!]
    games: [Game!]
    authors: [Author!]
  }
`;
