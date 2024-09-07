const UserAccount = {
  constructor(username, email, password, age, location) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.age = age;
    this.location = location;
  },

  changePassword(oldPassword, newPassword) {
    if (oldPassword === this.password) {
      this.password = newPassword;
      console.log("Password has been successfully changed.");
    } else {
      console.log("Incorrect old password.");
    }
  },

  updateEmail(newEmail) {
    this.email = newEmail;
    console.log("Email has been successfully updated.");
  },

  displayProfile() {
    console.log(`Username: ${this.username}`);
    console.log(`Email: ${this.email}`);
    console.log(`Age: ${this.age}`);
  },
};
