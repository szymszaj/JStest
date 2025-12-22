const person = {
  firstName: "Jan",
  lastName: "Kowalski",
  age: 30,
  address: {
    city: "Warszawa",
    street: "Główna 1",
  },
};

const { firstName, lastName, age } = person;
const {
  address: { city },
} = person;
const { firstName: imie, age: wiek = 0 } = person;

const colors = ["red", "green", "blue", "yellow"];
const [first, second, ...rest] = colors;

function greet({ firstName, lastName }) {
  return `Hello ${firstName} ${lastName}`;
}

const cardPlayer = {
  name: "Anna",
  points: [10, 20, 15, 30],
};

const totalPoints = getTotalPoints(cardPlayer);

function getTotalPoints({ points }) {
  return points.reduce((total, point) => total + point, 0);
}
