import { publishers, games, authors, reviews } from "./data.js";

export const resolvers = {
  Query: {
    games: () => games,
    reviews: () =>
      reviews.map((r) => ({
        ...r,
        game: games.find((g) => g.id === r.game),
        author: authors.find((a) => a.id === r.author),
      })),
    authors: () => authors,
    publishers: () => publishers,
    game: (_, { id }) => games.find((g) => g.id === id),
    author: (_, { id }) => authors.find((a) => a.id === id),
    publisher: (_, { id }) => publishers.find((p) => p.id === id),
  },
  Mutation: {
    addGame: (
      _,
      { name, description, releaseDate, platforms, genre, publisherId }
    ) => {
      const game = {
        id: String(games.length + 1),
        name,
        description,
        releaseDate,
        platforms,
        genre,
        publisher: publisherId || null,
      };
      games.push(game);
      return game;
    },
    addReview: (_, { rating, comment, gameId, authorId, likes }) => {
      const review = {
        id: String(reviews.length + 1),
        rating,
        comment,
        likes: likes ?? 0,
        game: gameId,
        author: authorId,
      };
      reviews.push(review);
      return {
        ...review,
        game: games.find((g) => g.id === gameId),
        author: authors.find((a) => a.id === authorId),
      };
    },
    addAuthor: (_, { name, email, verified }) => {
      const author = {
        id: String(authors.length + 1),
        name,
        email,
        verified,
      };
      authors.push(author);
      return author;
    },
    addPublisher: (_, { name, country, founded }) => {
      const publisher = {
        id: String(publishers.length + 1),
        name,
        country,
        founded,
      };
      publishers.push(publisher);
      return publisher;
    },
    deleteGame: (_, { id }) => {
      const idx = games.findIndex((g) => g.id === id);
      if (idx === -1) return false;
      games.splice(idx, 1);
      return true;
    },
    deleteReview: (_, { id }) => {
      const idx = reviews.findIndex((r) => r.id === id);
      if (idx === -1) return false;
      reviews.splice(idx, 1);
      return true;
    },
    deleteAuthor: (_, { id }) => {
      const idx = authors.findIndex((a) => a.id === id);
      if (idx === -1) return false;
      authors.splice(idx, 1);
      return true;
    },
    deletePublisher: (_, { id }) => {
      const idx = publishers.findIndex((p) => p.id === id);
      if (idx === -1) return false;
      publishers.splice(idx, 1);
      return true;
    },
  },
  Author: {
    reviews: (author) =>
      reviews
        .filter((r) => r.author === author.id)
        .map((r) => ({
          ...r,
          game: games.find((g) => g.id === r.game),
          author,
        })),
  },
  Game: {
    reviews: (game) =>
      reviews
        .filter((r) => r.game === game.id)
        .map((r) => ({
          ...r,
          game,
          author: authors.find((a) => a.id === r.author),
        })),
    authors: (game) =>
      authors.filter((a) =>
        reviews.some((r) => r.game === game.id && r.author === a.id)
      ),
    publisher: (game) => publishers.find((p) => p.id === game.publisher),
  },
  Publisher: {
    games: (publisher) => games.filter((g) => g.publisher === publisher.id),
  },
  Review: {
    game: (review) => games.find((g) => g.id === review.game),
    author: (review) => authors.find((a) => a.id === review.author),
  },
};
