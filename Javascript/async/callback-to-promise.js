// Callback Hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "billy" && password === "mac") ||
          (id === "coder" && password === "book")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "billy") {
          resolve({ name: "billy", role: "student" });
        } else if (user === "coder") {
          resolve({ name: "coder", role: "programmer" });
        } else {
          reject(new Error("no success"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("Enter your id");
const password = prompt("Enter your password");
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
