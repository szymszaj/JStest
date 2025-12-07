const peopleRegistered = {
  johnDoe: {
    firstName: "John",
    lastName: "Doe",
    age: 28,
    email: "john.doe@example.com",
  },
  janeSmith: {
    firstName: "Jane",
    lastName: "Smith",
    age: 34,
    email: "jane.smith@example.com",
  },
  emilyJones: {
    firstName: "Emily",
    lastName: "Jones",
    age: 22,
    email: "emily.jones@example.com",
  },
};

function registerPerson(username, firstName, lastName, age, email) {
  if (peopleRegistered[username]) {
    console.log("Username already taken. Please choose another one.");
    return;
  }

  peopleRegistered[username] = {
    firstName,
    lastName,
    age,
    email,
  };

  console.log(`User ${username} has been successfully registered.`);
}

function getPersonInfo(username) {
  const person = peopleRegistered[username];
  if (!person) {
    console.log("User not found.");
    return;
  }

  console.log(`User Information for ${username}:`);
  console.log(`Name: ${person.firstName} ${person.lastName}`);
  console.log(`Age: ${person.age}`);
  console.log(`Email: ${person.email}`);
}

registerPerson(
  "michaelBrown",
  "Michael",
  "Brown",
  30,
  "michael.brown@example.com"
);
