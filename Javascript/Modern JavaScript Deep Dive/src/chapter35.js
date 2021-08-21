// Chapter 35) 스프레드 문법
// ES6에 도입되어 하나로 뭉처 있는 여러 값들의 집합을 펼쳐서 개별적인 값들의
// 목록으로 만든다

console.log(...[1, 2, 3]); // 1 2 3
console.log(..."Hello"); // H e l l o

// 1) 함수 호출문의 인수 목록에서 사용하는 경우

let arr = [1, 2, 3];

let max = Math.max(arr);
console.log(max); // NaN

max = Math.max.apply(null, arr);
console.log(max); // 3

max = Math.max(...arr);
console.log(max); // 3

// 2) 배열 리터럴 내부에서 사용하는 경우

// ✅ concat : ES5에서 2개의 배열을 1개의 배열로 결합하는 메서드

arr = [1, 2].concat([3, 4]);
console.log(arr); // [1, 2, 3, 4]

// ES6

arr = [...[1, 2], ...[3, 4]];
console.log(arr); // [1, 2, 3, 4]

// ✅ splice : ES5에서 어떤 배열의 중간에 배열의 요소를 추가하거나
// 제거하기 위해 사용하는 메서드

let arr1 = [1, 4];
let arr2 = [2, 3];

arr1.splice(1, 0, arr2);
console.log(arr1); // [1, [2, 3], 4]

arr1 = [1, 4];
arr2 = [2, 3];

Array.prototype.splice.apply(arr1, [1, 0].concat(arr2));
console.log(arr1); // [1, 2, 3, 4]

// ES6

arr1 = [1, 4];
arr2 = [2, 3];

arr1.splice(1, 0, ...arr2);
console.log(arr1); // [1, 2, 3, 4]

// ✅ 배열 복사

// ES5

let origin = [1, 2];
let copy = origin.slice();

console.log(copy); // [1, 2]
console.log(copy === origin); // false

// ES6

copy = [...origin];

console.log(copy); // [1, 2]
console.log(copy === origin); // false

// ✅ 이터러블을 배열로 변환

const sum = (...args) => args.reduce((pre, cur) => pre + cur, 0);

console.log(sum(1, 2, 3)); // 6

// 3) 객체 리터럴 내부에서 사용하는 경우

const obj = { x: 1, y: 2 };
const copy1 = { ...obj };
console.log(obj === copy1); // false
console.log(obj.prototype === copy1.prototype); // true

const merged = Object.assign({}, { x: 1, y: 2 }, { y: 10, z: 3 });
console.log(merged); // {x: 1, y: 10, z: 3}
