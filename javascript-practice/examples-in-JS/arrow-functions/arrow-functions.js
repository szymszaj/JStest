const adultNames = (people) =>
  people.filter((person) => person.age > 18).map((person) => person.name);

