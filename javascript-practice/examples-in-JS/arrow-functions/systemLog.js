const systemLog = function (user) {
  console.log(`User logged in: ID=${user.id}, Name=${user.name}`);
};

const userData = { id: 123, name: "Jan Kowalski" };
systemLog(userData);
const anotherUser = {
  id: 456,
  name: "Anna Nowak",
  role: "admin",
  lastLogin: "2024-06-10",
};

function detailedSystemLog(user) {
  const { id, name, role = "user", lastLogin = "unknown" } = user;
  console.log(
    `User Info: ID=${id}, Name=${name}, Role=${role}, Last Login=${lastLogin}`
  );
}

detailedSystemLog(userData);
detailedSystemLog(anotherUser);
