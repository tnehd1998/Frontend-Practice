const fs = require("fs");
// 1 - What floor does Santa end up on
// ( --> should go UP 1 floor
// ) --> should go DOWN 1 floor

function question1() {
  fs.readFile("./input.txt", (err, data) => {
    console.time("Question 1");
    const directions = data.toString();
    const directionsArray = directions.split("");
    const answer = directionsArray.reduce((acc, currentValue) => {
      if (currentValue === "(") {
        return ++acc;
      } else if (currentValue === ")") {
        return --acc;
      }
    }, 0);
    console.timeEnd("Question 1");
    console.log("Question 1:", answer);
  });
}

question1();

// 2 - When does Santa first enter the basement

function question2() {
  fs.readFile("./input.txt", (err, data) => {
    console.time("Question 2");
    const directions = data.toString();
    const directionsArray = directions.split("");
    let accumulator = 0;
    let counter = 0;
    const answer = directionsArray.some((currentValue) => {
      if (currentValue === "(") {
        ++accumulator;
      } else if (currentValue === ")") {
        --accumulator;
      }
      ++counter;
      return accumulator < 0;
    });
    console.timeEnd("Question 2");
    console.log("Question 2:", counter);
  });
}

question2();
