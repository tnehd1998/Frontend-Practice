// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  for (let fruit of fruits) {
    console.log(fruit);
  }
}

// Q2. make an array out of a string
{
  const fruits = "🍎,🥝,🍌,🍒";
  const fruit1 = [fruits];
  const fruit2 = new Array(fruits);
  console.log(fruit1);
  console.log(fruit2);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  array.sort((a, b) => b - a);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  array.shift();
  array.shift();
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  for (let student of students) {
    if (student.score === 90) {
      console.log(student);
    }
  }
}

// Q6. make an array of enrolled students
{
  const arr_std_enrolled = new Array();
  for (let student of students) {
    if (student.enrolled) {
      arr_std_enrolled.push(student);
    }
  }
  console.log(arr_std_enrolled);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const arr_std_score = new Array();
  for (let student of students) {
    arr_std_score.push(student.score);
  }
  console.log(arr_std_score);
}

// Q8. check if there is a student with the score lower than 50
{
  let flag = false;
  for (let student of students) {
    if (student.score < 50) flag = true;
  }
  if (flag) console.log("Certain student is lower than 50 😢");
  else console.log("Every students has a score higher than 50 😄");
}

// Q9. compute students' average score
{
  let avg_score = 0;
  for (let student of students) {
    avg_score += student.score / students.length;
  }
  console.log(avg_score);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const arr_score = new Array();
  for (let student of students) {
    arr_score.push(student.score);
  }
  console.log(arr_score.toLocaleString());
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const arr_score = new Array();
  for (let student of students) {
    arr_score.push(student.score);
  }
  arr_score.sort((a, b) => a - b);
  console.log(arr_score.toLocaleString());
}
