// 1. Shorthand Properties

// Example 1

const firstName = "Billy";
const lastName = "Lee";

const person = {
  firstName: "Billy",
  lastName: "Lee",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const fixedPerson = {
  firstName,
  lastName,
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};
