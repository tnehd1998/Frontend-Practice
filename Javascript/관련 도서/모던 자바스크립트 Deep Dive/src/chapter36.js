// Chapter 36) 디스트럭처링 할당
// 구조화된 배열과 같은 이터러블 또는 객체를 파괴하여 1개 이상의 변수에
// 개별적으로 할당하는 것

// 1) 배열 디스트럭처링 할당

// ES5
let arr = [1, 2, 3];
let one = arr[0];
let two = arr[1];
let three = arr[2];

console.log(one, two, three); // 1 2 3

// ES6
const [one1, two1, three1] = arr;
console.log(one1, two1, three1); // 1 2 3

// 변수에 기본값을 설정할수 있지만, 할당된 값이 우선시 된다

const [x, ...y] = [1, 2, 3];
console.log(x, y); // 1 [2, 3]

// 2) 객체 디스트럭처링 할당

// ES5
let user = { firstName: "Billy", lastName: "Lee" };

let firstName = user.firstName;
let lastName = user.lastName;

console.log(firstName, lastName); // Billy Lee

// ES6
user = { firstName1: "Billy", lastName1: "Lee" };

const { lastName1, firstName1 } = user;
console.log(firstName1, lastName1); // Billy Lee
