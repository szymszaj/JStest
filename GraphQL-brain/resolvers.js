const games = [
  {
    id: "1",
    name: "Wiedźmin 3",
    description: "RPG akcji w otwartym świecie",
    releaseDate: "2015-05-19",
    platforms: ["PC", "PS4", "Xbox One"],
  },
  {
    id: "2",
    name: "Cyberpunk 2077",
    description: "Futurystyczny RPG",
    releaseDate: "2020-12-10",
    platforms: ["PC", "PS4", "Xbox One", "PS5"],
  },
  {
    id: "3",
    name: "Minecraft",
    description: "Buduj i eksploruj światy z bloków",
    releaseDate: "2011-11-18",
    platforms: ["PC", "PS4", "Xbox One", "Switch", "Mobile"],
  },
];

const authors = [
  { id: "1", name: "Jan Kowalski", verified: true },
  { id: "2", name: "Anna Nowak", verified: false },
  { id: "3", name: "Michał Wiśniewski", verified: true },
];

const reviews = [
  {
    id: "1",
    rating: 10,
    comment: "Świetna gra!",
    game: "1",
    author: "1",
  },
  {
    id: "2",
    rating: 8,
    comment: "Dużo lepsza po patchach!",
    game: "2",
    author: "2",
  },
  {
    id: "3",
    rating: 9,
    comment: "Nigdy się nie nudzi.",
    game: "3",
    author: "3",
  },
  {
    id: "4",
    rating: 7,
    comment: "Grafika trochę słaba, ale grywalność super.",
    game: "3",
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
    addAuthor: (_, { name, verified }) => {
      const author = {
        id: String(authors.length + 1),
        name,
        verified,
      };
      authors.push(author);
      return author;
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
  },
  Review: {
    game: (review) => games.find((g) => g.id === review.game),
    author: (review) => authors.find((a) => a.id === review.author),
  },
};
