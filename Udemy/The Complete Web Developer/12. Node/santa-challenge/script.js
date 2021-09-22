let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();

function question1() {
  console.time("Question 1");
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
      count++;
    } else {
      count--;
    }
  }
  console.timeEnd("Question 1");
  console.log("Question 1: " + count);
}

function question2() {
  console.time("Question 2");
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
      count++;
    } else {
      count--;
    }
    if (count === -1) {
      console.timeEnd("Question 2");
      console.log("Question 2: " + (i + 1));
      break;
    }
  }
}

question1();
question2();
