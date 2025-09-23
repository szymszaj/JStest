const games = [
  {
    id: "1",
    name: "Wiedźmin 3",
    description: "RPG akcji w otwartym świecie",
    releaseDate: "2015-05-19",
    platforms: ["PC", "PS4", "Xbox One"],
  },
];
const authors = [
  { id: "1", name: "Jan Kowalski", verified: true },
  { id: "2", name: "Anna Nowak", verified: false },
];
const reviews = [
  {
    id: "1",
    rating: 10,
    comment: "Świetna gra!",
    game: "1",
    author: "1",
  },
];

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
    game: (_, { id }) => games.find((g) => g.id === id),
    author: (_, { id }) => authors.find((a) => a.id === id),
  },
  Mutation: {
    addGame: (_, { name, description, releaseDate, platforms }) => {
      const game = {
        id: String(games.length + 1),
        name,
        description,
        releaseDate,
        platforms,
      };
      games.push(game);
      return game;
    },
    addReview: (_, { rating, comment, gameId, authorId }) => {
      const review = {
        id: String(reviews.length + 1),
        rating,
        comment,
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
  },
  Author: {
    reviews: (author) => reviews.filter((r) => r.author === author.id),
  },
};
