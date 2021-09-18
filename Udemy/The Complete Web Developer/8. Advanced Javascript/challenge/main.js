// Question 1.
let array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
array.sort((a, b) => a - b);
let result = [];
let count = 1;
let current = array.shift();
let newArray = [current];
for (let item of array) {
  if (current === item) {
    newArray.push(item);
    count++;
  } else {
    if (count === 1) {
      result.push(...newArray);
    } else {
      result.push(newArray);
    }
    current = item;
    count = 1;
    newArray = [];
    newArray.push(item);
  }
}

console.log(result);

// Question 2.
const targetNumber = (arr, target) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]].sort((a, b) => a - b);
      }
    }
  }
};
console.log(targetNumber([1, 2, 3], 4));

// Question 3.
const hexToRgb = (r, g, b) => {
  let redFirst = Math.floor(r / 16);
  let redSecond = r % 16;
  let greenFirst = Math.floor(g / 16);
  let greenSecond = g % 16;
  let blueFirst = Math.floor(b / 16);
  let blueSecond = b % 16;
  return `#${handleNum(redFirst)}${handleNum(redSecond)}${handleNum(
    greenFirst
  )}${handleNum(greenSecond)}${handleNum(blueFirst)}${handleNum(blueSecond)}`;
};

const handleNum = (num) => {
  if (num > 9) {
    num = num - 10;
    switch (num) {
      case 0:
        num = "A";
        break;
      case 1:
        num = "B";
        break;
      case 2:
        num = "C";
        break;
      case 3:
        num = "D";
        break;
      case 4:
        num = "E";
        break;
      case 5:
        num = "F";
        break;
    }
  }
  return num;
};

console.log(hexToRgb(255, 255, 255));
