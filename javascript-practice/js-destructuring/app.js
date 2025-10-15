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
