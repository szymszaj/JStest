const users = [
  { id: 1, name: "John", age: 25, email: "john@example.com", active: true },
  { id: 2, name: "Jane", age: 30, email: "jane@example.com", active: true },
  { id: 3, name: "Bob", age: 35, email: "bob@example.com", active: false },
];

const userOperations = {
  updateUser: (users, id, updates) => {
    return users.map((user) =>
      user.id === id ? { ...user, ...updates } : user,
    );
  },

  deleteUser: (users, id) => {
    return users.filter((user) => user.id !== id);
  },

  addUser: (users, newUser) => {
    if (!newUser.name || !newUser.email) {
      throw new Error("Name and email are required");
    }
    const maxId = Math.max(...users.map((user) => user.id));
    return [...users, { ...newUser, id: maxId + 1, active: true }];
  },

  toggleUserStatus: (users, id) => {
    return users.map((user) =>
      user.id === id ? { ...user, active: !user.active } : user,
    );
  },

  filterActiveUsers: (users) => {
    return users.filter((user) => user.active);
  },
};

try {
  const updatedUsers = userOperations.updateUser(users, 2, {
    name: "Janet",
    age: 31,
  });
  console.log("Updated users:", updatedUsers);

  const usersWithNew = userOperations.addUser(updatedUsers, {
    name: "Alice",
    age: 28,
    email: "alice@example.com",
  });
  console.log("After adding new user:", usersWithNew);

  const usersWithToggled = userOperations.toggleUserStatus(usersWithNew, 1);
  console.log("After toggling status:", usersWithToggled);

  const activeUsers = userOperations.filterActiveUsers(usersWithToggled);
  console.log("Active users:", activeUsers);
} catch (error) {
  console.error("Error:", error.message);
}

console.log("\n--- SPREAD OPERATOR - DALSZE PRZYKŁADY ---\n");

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const merged = [...array1, ...array2];
console.log("Łączone tablice:", merged);

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
copiedArray[0] = 999;
console.log("Oryginalna tablica:", originalArray);
console.log("Skopiowana tablica:", copiedArray);

const user1 = { name: "John", age: 30 };
const user2 = { email: "john@example.com", city: "New York" };
const mergedUser = { ...user1, ...user2 };
console.log("Połączony obiekt:", mergedUser);

const defaults = { theme: "light", fontSize: 14, language: "en" };
const userPrefs = { theme: "dark", fontSize: 16 };
const settings = { ...defaults, ...userPrefs };
console.log("Ustawienia (defaults + preferencje użytkownika):", settings);

const numbers = [2, 5, 10, 1, 8];
const maxNumber = Math.max(...numbers);
const minNumber = Math.min(...numbers);
console.log(`Max: ${maxNumber}, Min: ${minNumber}`);

const items = ["apple", "banana"];
const withApple = ["orange", ...items, "grape"];
console.log("Tablica z dodatkami:", withApple);

const person = {
  firstName: "Anna",
  lastName: "Smith",
  age: 28,
  job: "Developer",
};

const { firstName, lastName, ...rest } = person;

console.log(`Imię: ${firstName}, Nazwisko: ${lastName}`);
console.log("Pozostałe dane:", rest);

const sum = (...args) => args.reduce((acc, val) => acc + val, 0);
console.log("Suma 1+2+3+4+5:", sum(1, 2, 3, 4, 5));

const nested = [
  [1, 2],
  [3, 4],
];
const cloned = [...nested];
cloned[0][0] = 999;
console.log("Oryginalna zagnieżdżona tablica:", nested);
console.log("Skopiowana zagnieżdżona tablica:", cloned);

const config = { database: "mongodb", port: 27017 };
const updatedConfig = { ...config, port: 3000, ssl: true };
console.log("Zaktualizowana konfiguracja:", updatedConfig);
