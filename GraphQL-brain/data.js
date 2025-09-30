const publishers = [
  {
    id: "1",
    name: "CD Projekt",
    country: "Poland",
    founded: "1994-05-01",
  },
  {
    id: "2",
    name: "Mojang Studios",
    country: "Sweden",
    founded: "2009-05-17",
  },
];

const games = [
  {
    id: "1",
    name: "Wiedźmin 3",
    description: "RPG akcji w otwartym świecie",
    releaseDate: "2015-05-19",
    platforms: ["PC", "PS4", "Xbox One"],
    genre: "RPG",
    publisher: "1",
  },
  {
    id: "2",
    name: "Cyberpunk 2077",
    description: "Futurystyczny RPG",
    releaseDate: "2020-12-10",
    platforms: ["PC", "PS4", "Xbox One", "PS5"],
    genre: "RPG",
    publisher: "1",
  },
  {
    id: "3",
    name: "Minecraft",
    description: "Buduj i eksploruj światy z bloków",
    releaseDate: "2011-11-18",
    platforms: ["PC", "PS4", "Xbox One", "Switch", "Mobile"],
    genre: "Sandbox",
    publisher: "2",
  },
];

const authors = [
  {
    id: "1",
    name: "Jan Kowalski",
    email: "jan.kowalski@email.com",
    verified: true,
  },
  {
    id: "2",
    name: "Anna Nowak",
    email: "anna.nowak@email.com",
    verified: false,
  },
  {
    id: "3",
    name: "Michał Wiśniewski",
    email: "michal.wisniewski@email.com",
    verified: true,
  },
];

const reviews = [
  {
    id: "1",
    rating: 10,
    comment: "Świetna gra!",
    likes: 5,
    game: "1",
    author: "1",
  },
  {
    id: "2",
    rating: 8,
    comment: "Dużo lepsza po patchach!",
    likes: 2,
    game: "2",
    author: "2",
  },
  {
    id: "3",
    rating: 9,
    comment: "Nigdy się nie nudzi.",
    likes: 7,
    game: "3",
    author: "3",
  },
  {
    id: "4",
    rating: 7,
    comment: "Grafika trochę słaba, ale grywalność super.",
    likes: 1,
    game: "3",
    author: "1",
  },
];

module.exports = { publishers, games, authors, reviews };
