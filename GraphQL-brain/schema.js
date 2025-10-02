export const typeDefs = `#graphql
  type Publisher {
    id: ID!
    name: String!
    country: String
    founded: String
    games: [Game!]
  }

  type Game {
    id: ID!
    name: String!
    description: String
    releaseDate: String
    platforms: [String!]!
    genre: String
    publisher: Publisher
    reviews: [Review!]
    authors: [Author!]
  }

  type Review {
    id: ID!
    rating: Int!
    comment: String!
    likes: Int!
    game: Game!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
    email: String
    verified: Boolean!
    reviews: [Review!]
  }

  type Query {
    reviews: [Review!]
    games: [Game!]
    authors: [Author!]
    publishers: [Publisher!]
    game(id: ID!): Game
    author(id: ID!): Author
    publisher(id: ID!): Publisher
    gamesByGenre(genre: String!): [Game!]
    topRatedGames(limit: Int): [Game!]
  }

  type Mutation {
    addGame(
      name: String!
      description: String
      releaseDate: String
      platforms: [String!]!
      genre: String
      publisherId: ID
    ): Game!
    addReview(
      rating: Int!
      comment: String!
      gameId: ID!
      authorId: ID!
      likes: Int
    ): Review!
    addAuthor(
      name: String!
      email: String
      verified: Boolean!
    ): Author!
    addPublisher(
      name: String!
      country: String
      founded: String
    ): Publisher!
    deleteGame(id: ID!): Boolean!
    deleteReview(id: ID!): Boolean!
    deleteAuthor(id: ID!): Boolean!
    deletePublisher(id: ID!): Boolean!
  }
`;
