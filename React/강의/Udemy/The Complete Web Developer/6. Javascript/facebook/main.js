var database = [
  {
    username: "Billy",
    password: "1234",
  },
  {
    username: "Sally",
    password: "124",
  },
  {
    username: "Ingrid",
    password: "134",
  },
];

var newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning;;",
  },
  {
    username: "Sally",
    timeline: "Javascript, the best language!",
  },
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert("Invalid username and password");
  }
}

signIn(userNamePrompt, passwordPrompt);
