// 1. Arrow function z destructuring i default parameters
const getUserInfo = ({ name = "Guest", age = 0, role = "User" } = {}) => ({
  displayName: name.toUpperCase(),
  isAdult: age >= 18,
  permissions: role === "Admin" ? ["read", "write", "delete"] : ["read"],
});
