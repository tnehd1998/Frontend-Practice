// Chapter 27) 배열
// 1) 배열이란?
// 배열 : 여러 개의 값을 순차적으로 나열한 자료구조

const arr = ["apple", "banana", "orange"];

// 요소(element) : 배열이 가지고 있는 값
// 인덱스 : 배열에서 자신의 위치를 나타내는 0이상의 정수
// length : 요소의 개수, 즉 배열의 길이

console.log(arr.length); // 3

// 자바스크립트에 배열이란 타입은 존재하지 않음, 배열은 객체 타입이다

console.log(typeof arr); // object

// - 일반 객체와 배열을 구분하는 가장 명확한 차이는 "값의 순서"와
// "length 프로퍼티"다

// 2) 자바스크립트 배열은 배열이 아니다
// - 자료구조에서 말하는 배열은 동일간 크기의 메모리 공간이 빈틈없이 연속적으로
// 나열된 자료구조인 밀집 배열을 의미함
// - 밀집 배열 : 하나의 데이터 타입으로 통일되어 있으며 서로 연속적으로 인접함

// ⭐️ 자바스크립트이 배열은 각각의 메모리 공간은 동일한 크기를 갖지 않아도 되며,
// 연속적으로 이어져 있지 않을 수도 있는 희소 배열의 형태다

// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내 낸 특수한 객체다

// 일반적인 배열과 자바스크립트 배열의 장단점
// 1. 일반적인 배열은 인덱스로 요소에 빠르게 접근할 수 있지만 특정 요소를
// 검색하거나 요소를 삽입 또는 삭제하는 경우에는 효율적이지 않음
// 2. 자바스크립트 배열은 해시 테이블로 구현된 객체이므로 요소에 접근하는
// 경우 성능적인 면에서 느릴수 밖에 없는 구조적인 단점이 있지만 특정 요소를
// 검색하거나 요소를 삽입 또는 삭제하는 경우에는 빠른 성능을 기대할 수 있다

// 배열과 일반 객체의 성능을 테스트해보면 배열이 약 2배정도 빠르다

// 3) length 프로퍼티와 희소 배열
// - length는 빈 배열일 경우 0이지만, 빈 배열이 아닌 경우 가장 큰 인덱스에
// 1을 더한 것과 같다
// - 희소 배열은 length와 배열 요소의 개수가 일치하지 않는다. 희소 배열의
// length는 희소 배열의 실제 요소 개수보다 언제나 크다
// - 배열을 생성할 경우에는 희소 배열을 생성하지 않도록 주의하고, 배열에는
// 같은 타입의 요소를 연속적으로 위치시키는 것이 최선이다

// 4) 배열 생성
// ✅ 배열 리터럴 : 0개 이상의 요소를 쉼표로 구분하여 대괄호([])로 묶는 것

const arr1 = [1, 2, 3];
console.log(arr1.length); // 3

// ✅ Array 생성자 함수

const arr2 = new Array(10);
console.log(arr2); // [empty * 10]
console.log(arr2.length); // 10

// ✅ Array.of

console.log(Array.of(1)); // [1]
console.log(Array.of(1, 2, 3)); // [1,2,3]
console.log(Array.of("string")); // ["string"]

// ✅ Array.from

console.log(Array.from({ length: 2, 0: "a", 1: "b" }));
// ["a", "b"]
console.log(Array.from("Hello")); // ["H","e","l","l","o"]

// 5) 배열 요소의 참조

console.log(arr[0]); // apple
console.log(arr[1]); // banana
console.log(arr[10]); // undefined

// 6) 배열 요소의 추가와 갱신
// 존재하지 않는 인덱스를 사용해 값을 할당하면 새로운 요소가 추가됨

const arr3 = [0];
arr3[1] = 1;
console.log(arr3); // [0, 1]
console.log(arr3.length); // 2

// 만약에 정수 이외의 값을 인덱스처럼 사용하면 요소가 생성되는 것이 아니라
// 프로퍼티가 생성되는데, 해당 프로퍼티들은 length에 영향을 주지 않는다

arr3["1"] = 2;
arr3["foo"] = 3;
arr3.bar = 4;
arr3[1.1] = 5;
arr3[-1] = 6;

console.log(arr3);
// [0, 2, foo: 3, bar: 4, 1.1: 5, -1: 6]
console.log(arr3.length); // 2

// 7) 배열 요소의 삭제
// 배열은 사실 객체이기 때문에 배열의 특정 요소를 삭제하기 위해 delete
// 연산자를 사용할 수 있다

const arr4 = [1, 2, 3];

delete arr4[1];
console.log(arr4); // [1, empty, 3]
console.log(arr4.length); // 3

// 희소 배열을 만들지 않고 특정 요소를 완전히 삭제하려면
// Array.prototype.splice 메서드를 사용한다

const arr5 = [1, 2, 3];

arr5.splice(1, 1);
console.log(arr5); // [1, 3]
console.log(arr5.length); // 2

// 8) 배열 메서드
// 배열 메서드는 결과물을 반환하는 패턴이 두 가지다
// 원본 배열 : 배열 메서드를 호출한 배열, 즉 배열 메서드의 구현체 내부에서
// this가 가리키는 객체
// 1. 원본 배열을 직접 변경하는 메서드
// 2. 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환하는 메서드

const arr6 = [1];

arr6.push(2);
console.log(arr6); // [1, 2]

const result = arr6.concat(3);
console.log(arr6); // [1, 2]
console.log(result); // [1, 2, 3]

// 가급적 원본 배열을 직접 변경하지 않는 메서드를 사용하는 편이 좋다

// ✅ Array.isArray : 배열의 유무에 따라 불리언 값을 반환

console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

// ✅ Array.prototype.indexOf : 인수로 전달된 요소를 검색하여 인덱스를
// 반환한다

console.log(result.indexOf(2)); // 1
console.log(result.indexOf(4)); // -1
console.log(result.indexOf(2, 1)); // 1

// ES7에서 도입된 Array.prototype.includes 메서드를 사용하면 가독성이
// 더 좋다

console.log(result.includes(2)); // true
console.log(result.includes(4)); // false

// ✅ Array.prototype.push : 인수로 전달받은 모든 값을 원본 배열의
// 마지막 요소로 추가하고 변경된 length 프로퍼티 값을 반환한다
// push 메서드는 원본 배열을 직접 변경한다

let result1 = arr5.push(4, 5);
console.log(result1); // 4
console.log(arr5); // [1, 3, 4, 5]

// ES6 스프레드 문법을 사용하는 편이 좋다

const arr7 = [1, 2];
const newArr = [...arr7, 3];
console.log(newArr); // [1, 2, 3]
console.log(arr7); // [1, 2]

// ✅ Array.prototype.pop : 원본 배열에서 마지막 요소를 제거하고 제거한
// 요소를 반환한다

let result2 = arr7.pop();
console.log(result2); // 2
console.log(arr7); // [1]

// push, pop 메서드를 사용하면 스택을 쉽게 구현할 수 있다 😍

// ✅ Array.prototype.unshift : 인수로 전달받은 모든 값을 원본 배열의
// 선두에 요소로 추가하고 변경된 length 프로퍼티 값을 반환한다

const arr8 = [1, 2];
let result3 = arr8.unshift(3, 4);
console.log(result3); // 4
console.log(arr8); // [3, 4, 1, 2]

// ES6 스프레드 문법을 사용하는 편이 좋다

const arr9 = [1, 2];
const newArr1 = [3, ...arr9];
console.log(newArr1); // [3, 1, 2]
console.log(arr9); // [1, 2]

// ✅ Array.prototype.shift : 원본 배열에서 첫 번째 요소를 제거하고
// 제거한 요소를 반환한다

let result4 = arr9.shift();
console.log(result4); // 1
console.log(arr9); // [2]

// shift, push메서드를 사용하면 큐를 쉽게 구현할 수 있다 😍

// ✅ Array.prototype.concat : 인수로 전달된 값들을 원본 배열의 마지막
// 요소로 추가한 새로운 배열을 반환한다

const arr10 = [1, 2];
const arr11 = [3, 4];

result1 = arr10.concat(arr11);
console.log(result1); // [1, 2, 3, 4]

result1 = arr10.concat(3);
console.log(result1); // [1, 2, 3]

result1 = arr10.concat(arr11, 5);
console.log(result1); // [1, 2, 3, 4, 5]

console.log(arr10); // [1, 2]

// push와 unshift 메서드는 concat 메서드로 대체할 수 있다
// 원본 배열을 변경함과 안함의 차이가 존재하기 때문에 상황에 맞게 사용한다

// concat 메서드는 ES6의 스프레드 문법으로 대체할 수 있다

result1 = [1, 2].concat([3, 4]);
console.log(result1); // [1, 2, 3, 4]

result1 = [...[1, 2], ...[3, 4]];
console.log(result1); // [1, 2, 3, 4]

// 일관성 있게 ES6의 스프레드 문법을 사용하는 것을 권장함

// ✅ Array.prototype.splice : 원본 배열의 중간에 요소를 추가하거나
// 중간에 있는 요소를 제거하는 경우 사용한다

const arr12 = [1, 2, 3, 4];
result1 = arr12.splice(1, 2, 20, 30);
// 원본 배열의 인덱스 1부터 2개의 요소를 제거하고 그 자리에 20, 30을 넣음

console.log(result1); // [2, 3]
console.log(arr12); // [1, 20, 30, 4]

// splice 메서드의 두 번째 인수에 0을 지정하면 아무런 요소도 제거하지 않고
// 새로운 요소를 삽입함

const arr13 = [1, 2, 3, 4];
result1 = arr13.splice(1, 0, 100);

console.log(arr13); // [1, 100, 2, 3, 4]
console.log(result1); // []

// splice 메서드의 세 번째 인수에 추가할 요소들의 목록을 전달하지 않으면
// 원본 배열에서 지정된 요소를 제거하기만 한다

const arr14 = [1, 2, 3, 4];
result1 = arr14.splice(1, 2);

console.log(arr14); // [1, 4]
console.log(result1); // [2, 3]

// splice 메서드의 두 번째 인수를 생략하면 첫 번째 인수로 전달된 시작
// 인덱스부터 모든 요소를 제거한다

const arr15 = [1, 2, 3, 4];
result1 = arr15.splice(1);

console.log(arr15); // [1]
console.log(result1); // [2, 3, 4]

// ✅ Array.prototype.slice : 인수로 전달된 범위의 요소들을 복사하여
// 배열로 반환한다

const arr16 = [1, 2, 3];
console.log(arr16.slice(0, 1)); // [1]
console.log(arr16.slice(1, 2)); // [2]
console.log(arr16); // [1, 2, 3]

console.log(arr16.slice(1)); // [2, 3]

console.log(arr16.slice(-1)); // [3]
console.log(arr16.slice(-2)); // [2, 3]

const copy = arr16.slice();
console.log(copy); // [1, 2, 3]
console.log(copy === arr16); // false

// ✅ Array.prototype.join : 원본 배열의 모든 요소를 문자열로 변환한 후,
// 인수로 전달받은 문자열, 즉 구분자로 연결한 문자열을 반환한다

console.log(arr16.join()); // '1,2,3'
console.log(arr16.join("")); // '123'
console.log(arr16.join(":")); // '1:2:3'

// ✅ Array.prototype.reverse : 원본 배열의 순서를 반대로 뒤집는다

console.log(arr16.reverse()); // [3, 2, 1]

// ✅ Array.prototype.fill : ES6에 도입되어 인수로 전달받은 값을 배열의
// 처음부터 끝까지 요소로 채운다

arr16.fill(0);
console.log(arr16); // [0, 0, 0]

// ✅ Array.prototype.includes : ES7에 도입되어 배열 내에 특정 요소가
// 포한되어 있는지에 따라 불리언 값으로 반환한다

const arr17 = [1, 2, 3];
console.log(arr17.includes(2)); // true
console.log(arr17.includes(100)); // false

// ✅ Array.prototype.flat : ES10에 도입되어 인수로 전달한 깊이만큼
// 재귀적으로 배열을 평탄화한다

console.log([1, [2, 3, 4, 5]].flat()); // [1, 2, 3, 4, 5]
console.log([1, [2, [3, [4]]]].flat()); // [1, 2, [3, [4]]]
console.log([1, [2, [3, [4]]]].flat(1)); // [1, 2, [3, [4]]]
console.log([1, [2, [3, [4]]]].flat(2)); // [1, 2, 3, [4]]
console.log([1, [2, [3, [4]]]].flat().flat());
// [1, 2, 3, [4]]
console.log([1, [2, [3, [4]]]].flat(Infinity));
// [1, 2, 3, 4]

// 9) 배열 고차 함수
// 고차함수 : 함수를 인수로 전달받거나 함수를 반환하는 함수

// ✅ Array.prototype.sort : 배열의 요소를 오름차순으로 정렬한다

let fruits = ["Banana", "Apple", "Orange"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Orange"]

// 한글 문자열인 요소도 오름차순으로 정렬 가능

fruits = ["바나나", "오렌지", "사과"];
fruits.sort();
console.log(fruits); // ["바나나", "사과", "오렌지"]

// 내림차순을 원하는 경우 sort로 오름차순으로 정렬한 뒤 reverse를 사용

fruits = ["Banana", "Apple", "Orange"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Orange"]
fruits.reverse();
console.log(fruits); // ["Orange", "Banana", "Apple"]

// 숫자 요소를 정렬할 때는 sort 메서드에 정렬 순서를 정의하는 비교 함수를
// 인수로 전달해야 한다

const points = [40, 100, 1, 5, 2, 25, 10];

points.sort((a, b) => a - b);
console.log(points); // [1, 2, 5, 10, 25, 40, 100]

points.sort((a, b) => b - a);
console.log(points); // [100, 40, 25, 10, 5, 2, 1]

// 객체를 요소로 갖는 배열을 정렬하는 예시

const todos = [
  { id: 4, content: "JavaScript" },
  { id: 1, content: "HTML" },
  { id: 2, content: "CSS" },
];

function compare(key) {
  return (a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
}

todos.sort(compare("id"));
console.log(todos);
//[
//    { id: 1, content: "HTML" },
//    { id: 2, content: "CSS" },
//    { id: 4, content: "JavaScript" },
//]

todos.sort(compare("content"));
console.log(todos);
//[
//    { id: 2, content: "CSS" },
//    { id: 1, content: "HTML" },
//    { id: 4, content: "JavaScript" },
//]

// ✅ Array.prototype.forEach : for문을 대체할 수 있는 고차함수
// 자신의 내부에서 반복문을 실행한다

const numbers = [1, 2, 3];
const pows = [];

numbers.forEach((item) => pows.push(item ** 2));
console.log(pows); // [1, 4, 9]

// forEach 메서드는 원본 배열을 변경하지 않지만 콜백 함수를 통해 변경 가능

numbers.forEach((item, index, arr) => {
  arr[index] = item ** 2;
});
console.log(numbers); // [1, 4, 9]

// forEach 메서드는 for문과는 달리 break, continue문을 사용할 수 없다
// 배열의 모든 요소를 빠짐없이 모두 순회하며 중간에 순회를 중단할 수 없다

// 희소 배열의 경우 존재하지 않는 요소는 순회 대상에서 제외된다

// forEach 메서드는 for문에 비해 성능은 좋지 않지만 가독성은 더 좋다

// ✅ Array.prototype.map : 자신을 호출한 배열의 모든 요소를 순회하면서
// 인수로 전달받은 콜백 함수를 반복 호출하고 콜백 함수의 반환값들로 구성된
// 새로운 배열을 반환한다. 이때 원본 배열은 변경되지 않는다

const roots = numbers.map((item) => Math.sqrt(item));
console.log(roots); // [1, 2, 3]
console.log(numbers); // [1, 4, 9]

// map 메서드를 호출한 배열과 map 메서드가 생성하여 반환한 배열은
// 1:1 매핑된다

// ✅ Array.prototype.filter : 자신을 호출한 배열의 모든 요소를
// 순회하면서 인수로 전달받은 콜백 함수를 반복적으로 호출하고, 콜백 함수의
// 반환값이 true인 요소로만 구성된 새로운 배열을 반환한다

const filterNumbers = [1, 2, 3, 4, 5];

const odds = filterNumbers.filter((item) => item % 2);
console.log(odds); // [1, 3, 5]

// filter 메서드가 생성하여 반환한 새로운 배열의 length 프로퍼티 값은
// filter 메서드를 호출한 배열의 length 프로퍼티 값과 같거나 작다

// filter 메서드를 사용해 특정 요소를 제거할 경우 중복되는 요소도 모두
// 제거하기 때문에 특정 요소를 하나만 제거하려면 indexOf 메서드를 통해
// 특정 요소의 인덱스를 얻은 후 splice 메서드를 사용한다

// ✅ Array.prototype.reduce : 자신을 호출한 배열을 모든 요소를
// 순회하며 인수로 전달받은 콜백 함수를 반복하여 호출하고, 콜백 함수의
// 반환값을 다음 순회 시에 콜백 함수의 첫 번째 인수로 전달하면서 콜백
// 함수를 호출하여 하나의 결과값을 만들어 반환한다

const sum = [1, 2, 3, 4].reduce(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
  0
);
console.log(sum); // 10

// reduce 메서드는 하나의 결과값을 반환한다
// reduce 메서드를 호출할 때는 언제나 초기값을 전달하는 것이 안전하다

// ✅ Array.prototype.some : 자신을 호출한 배열의 요소를 순회하면서
// 인수로 전달된 콜백 함수를 호출한다

console.log([5, 10, 15].some((item) => item > 10)); // true
console.log([5, 10, 15].some((item) => item < 0)); // false

// ✅ Array.prototype.every : 자신을 호출한 배열의 요소를 순회하면서
// 인수로 전달된 콜백 함수를 호출한다

console.log([5, 10, 15].every((item) => item > 3)); // true
console.log([5, 10, 15].every((item) => item > 10)); // false

// ✅ Array.prototype.find : ES6에 도입되어 자신을 호출한 배열의
// 요소를 순회하면서 인수로 전달된 콜백 함수를 호출하여 반환값이 true인
// 첫 번째 요소를 반환한다

const user = [
  { id: 1, name: "Lee" },
  { id: 2, name: "Kim" },
  { id: 3, name: "Choi" },
  { id: 4, name: "Park" },
];

console.log(user.find((user) => user.id === 2));
// {id: 2, name: "Kim"}

// ✅ Array.prototype.findIndex : ES6에 도입되어 자신을 호출한
// 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출하여 반환값이
// true인 첫 번째 요소의 인덱스를 반환한다

console.log(user.findIndex((user) => user.id === 2)); // 1
console.log(user.findIndex((user) => user.name === "Park"));
// 3

// ✅ Array.prototype.flatMap : ES10에 도입되어 map 메서드를 통해
// 생성된 새로운 배열을 평탄화한다

const flatArr = ["hello", "world"];
console.log(flatArr.map((x) => x.split("")).flat());
// ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]
console.log(flatArr.flatMap((x) => x.split("")));
// ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]
