const users = [
  { id: 1, name: "John", age: 25, email: "john@example.com", active: true },
  { id: 2, name: "Jane", age: 30, email: "jane@example.com", active: true },
  { id: 3, name: "Bob", age: 35, email: "bob@example.com", active: false },
];

const userOperations = {
  updateUser: (users, id, updates) => {
    return users.map((user) =>
      user.id === id ? { ...user, ...updates } : user
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
      user.id === id ? { ...user, active: !user.active } : user
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
