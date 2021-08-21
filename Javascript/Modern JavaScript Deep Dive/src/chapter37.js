// Chapter 37) Set과 Map

// 1) Set
// Set 객체는 중복되지 않는 유일한 값들의 집합이다

// ✅ Set 객체의 생성

let set = new Set();
console.log(set); // Set(0) {}

// Set 생성자 함수는 이터러블을 인수로 전달받아 Set 객체를 생성하고 이때
// 이터러블의 중복된 값은 Set 객체에 요소로 저장되지 않는다

let set1 = new Set([1, 2, 3, 4]);
console.log(set1); // Set(4) {1, 2, 3, 4}

let set2 = new Set("hello");
console.log(set2); // Set(4) {"h", "e", "l", "o"}

// 중복을 허용하지 않기 때문에 중복되는 요소는 제거가 된다

// ✅ 요소 개수 확인

const { size } = new Set([1, 2, 3, 3]);
console.log(size); // 3

// ✅ 요소 추가

console.log(set); // Set(0) {}

set.add(1);
console.log(set); // Set(1) {1}

set.add(2).add(3);
console.log(set); // Set(3) {1, 2, 3}

// Set 객체는 객체나 배열과 같이 자바스크립트의 모든 값을 요소로 저장함

// ✅ 요소 존재 여부
console.log(set.has(2)); // true
console.log(set.has(5)); // false

// ✅ 요소 삭제
set.delete(2);
console.log(set); // Set(2) {1, 3}
set.delete(5);
console.log(set); // Set(2) {1, 3}

// ✅ 요소 일괄 삭제
set.clear();
console.log(set); // Set(0) {}

// ✅ 요소 순회 : Set.prototype.forEach 메서드를 사용한다
set = new Set([1, 2, 3]);
set.forEach((v, v2, set) => console.log(v, v2, set));
// 1 1 Set(3) {1, 2, 3}
// 2 2 Set(3) {1, 2, 3}
// 3 3 Set(3) {1, 2, 3}

// Set 객체는 이터러블이다

console.log(Symbol.iterator in set); // true

for (const item of set) {
  console.log(item); // 1 2 3
}

console.log([...set]); // [1, 2, 3]

const [a, ...rest] = set;
console.log(a, rest); // 1, [2, 3]

// ✅ 집합 연산

// 1. 교집합

Set.prototype.intersection = function (set) {
  const result = new Set();
  for (const value of set) {
    if (this.has(value)) result.add(value);
  }
  return result;
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

console.log(setA.intersection(setB)); // Set(2) {2, 4}
console.log(setB.intersection(setA)); // Set(2) {2, 4}

Set.prototype.intersection2 = function (set) {
  return new Set([...this].filter((v) => set.has(v)));
};

console.log(setA.intersection2(setB)); // Set(2) {2, 4}
console.log(setB.intersection2(setA)); // Set(2) {2, 4}

// 2. 합집합

Set.prototype.union = function (set) {
  const result = new Set(this);
  for (const value of set) {
    result.add(value);
  }
  return result;
};

console.log(setA.union(setB)); // Set(4) {1, 2, 3, 4}
console.log(setB.union(setA)); // Set(2) {2, 4, 1, 3}

Set.prototype.union2 = function (set) {
  return new Set([...this, ...set]);
};

console.log(setA.union2(setB)); // Set(4) {1, 2, 3, 4}
console.log(setB.union2(setA)); // Set(4) {2, 4, 1, 3}

// 3. 차집합

Set.prototype.difference = function (set) {
  const result = new Set(this);
  for (const value of set) {
    result.delete(value);
  }
  return result;
};

console.log(setA.difference(setB)); // Set(2) {1, 3}
console.log(setB.difference(setA)); // Set(0) {}

Set.prototype.difference2 = function (set) {
  return new Set([...this].filter((v) => !set.has(v)));
};

console.log(setA.difference2(setB)); // Set(2) {1, 3}
console.log(setB.difference2(setA)); // Set(0) {}

// 4. 부분 집합과 상위 집합

Set.prototype.isSuperset = function (subset) {
  for (const value of subset) {
    if (!this.has(value)) return false;
  }
  return true;
};

console.log(setA.isSuperset(setB)); // true
console.log(setB.isSuperset(setA)); // false

Set.prototype.isSuperset2 = function (subset) {
  const supersetArr = [...this];
  return [...subset].every((v) => supersetArr.includes(v));
};

console.log(setA.isSuperset2(setB)); // true
console.log(setB.isSuperset2(setA)); // false

// 2) Map
// 키와 값의 쌍으로 이루어진 컬렉션

// ✅ Map 객체의 생성

let map = new Map();
console.log(map); // Map(0) {}

// Map 생성자 함수는 이터러블을 인수로 전달받아 Map 객체를 생성한다. 이때
// 인수로 전달되는 이터러블은 키와 값의 쌍으로 이루어진 요소로 구성되어야 한다

let map1 = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

console.log(map1); // Map(2) {"key1" => "value1",
//                              "key2" => "value2"}

map = new Map([
  ["key1", "value1"],
  ["key1", "value2"],
]);

console.log(map); // Map(1) {"key1" => "value2"}

// ✅ 요소 개수 확인

const { size: size1 } = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

console.log(size1); // 2

// ✅ 요소 추가
map = new Map();
console.log(map); // Map(0) {}

map.set("key1", "value1");
console.log(map); // Map(1) {"key1" => "value1"}

// 객체는 문자열 또는 심벌 값만 키로 사용할수 있지만 Map 객체는 키 타입에
// 제한이 없다

// ✅ 요소 취득
map = new Map();

const lee = { name: "Lee" };
const kim = { name: "Kim" };

map.set(lee, "developer").set(kim, "designer");

console.log(map.get(lee)); // developer
console.log(map.get("key")); // undefined

// ✅ 요소 존재 여부 확인
console.log(map.has(lee)); // true
console.log(map.has("key")); // false

// ✅ 요소 삭제
map.delete(kim);
console.log(map); // Map(1) {{name: "Lee"} => "developer"}

// delete 메서드는 삭제 성공의 유무를 불리언 값으로 반환하기 때문에
// set 메서드와 달리 연속적으로 호출할 수 없다

// ✅ 요소 일괄 삭제
map.clear();
console.log(map); // Map(0) {}

// ✅ 요소 순회
map = new Map([
  [lee, "developer"],
  [kim, "designer"],
]);

map.forEach((v, k, map) => console.log(v, k, map));

// Map 객체는 이터러블이다

console.log(Symbol.iterator in map); // true

for (const key of map.keys()) {
  console.log(key); // {name: "Lee"} {name: "Kim"}
}

for (const value of map.values()) {
  console.log(value); // developer designer
}

for (const entry of map.entries()) {
  console.log(entry);
}
