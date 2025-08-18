import { pick, omit, firstN, filterBy } from "./pick.js";

const users = [
  { id: 1, name: "Ala", email: "ala@example.com", role: "admin" },
  { id: 2, name: "Ola", email: "ola@example.com", role: "user" },
  { id: 3, name: "Jan", email: "jan@example.com", role: "user" },
  { id: 4, name: "Marek", email: "marek@example.com", role: "moderator" },
];

const shortUser = pick(users[0], ["id", "name"]);
console.log("Pick:", shortUser);

const noRole = omit(users[0], ["role"]);
console.log("Omit:", noRole);

const firstTwo = firstN(users, 2);
console.log("First 2:", firstTwo);

const onlyUsers = filterBy(users, "role", "user");
console.log("Filtered users:", onlyUsers);

const [firstUser, ...restUsers] = users;
const { name: firstName, email: firstEmail } = firstUser;
console.log(`Pierwszy user: ${firstName} (${firstEmail})`);
console.log(
  "Reszta userów:",
  restUsers.map((u) => u.name)
);
