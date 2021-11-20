// Chapter 34) 이터러블

// 1) 이터레이션 프로토콜
// - ES6에서 도입되어 순회 가능한 데이터 컬렉션(자료구조)을 만들기 위해
// 미리 약속한 규칙
// - ES6 이전에는 다양한 방법으로 배열을 순회할 수 있었는데, ES6에서는
// 순회 가능한 데이터 컬렉션을 이터레이션 프로토콜을 준수하는 이터러블로
// 통일하여 for ... of문, 스프레드 문법, 배열 디스트럭처링 할당의
// 대상으로 사용할 수 있도록 일원화했다

// ✅ 이터러블 : 이터러블 프로토콜을 준수한 객체
// Symbol.iterator를 프로퍼티 키로 사용한 메서드를 직접 구현하거나
// 프로토타입 체인을 통해 상속받은 객체를 의미

const array = [1, 2, 3];
console.log(Symbol.iterator in array); // true

for (const item of array) {
  console.log(item); // 1 2 3
}

console.log([...array]); // [1, 2, 3]

const [a, ...rest] = array;
console.log(a, rest); // 1, [2, 3]

// Symbol.iterator 메서드를 직접 구현하지 않거나 상속받지 않은 일반
// 객체는 이터러블 프로토콜을 준수한 이터러블이 아니기 때문에 일반 객체는
// for...of, 스프레드 문법, 배열 디스트럭처링 할당의 대상으로 사용할수 없다

const obj = { a: 1, b: 2 };
console.log(Symbol.iterator in obj); // false

// for (const item of obj) { // error
//   console.log(item);
// }

// const [a1, b] = obj; // error

// TC39에서 일반 객체에 스프레드 문법의 사용을 허용한다

console.log({ ...obj }); // {a: 1, b: 2}

// ✅ 이터레이터
// 이터러블의 Symbol.iterator 메서드가 반환한 이터레이터는 next 메서드를
// 갖는다

const iterator = array[Symbol.iterator]();

console.log("next" in iterator); // true

// 이터레이터 리절트 객체 : next 메서드를 호출하여 이터러블을 순차적으로
// 한단계씩 순회하며 순회결과를 나타내는 것

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next());
// {value: undefined, done: true}

// 2) 빌트인 이터러블
// 자바스크립트는 이터레이션 프로토콜을 준수한 객체인 빌트인 이터러블을 제공함
// (Array, String, Map, Set, TypedArray, arguments, DOM 컬렉션)

// 3) for ... of 문
// for (변수 선언문 of 이터러블) { }
// for (변수 선언문 in 객체) { }

for (const item of [1, 2, 3]) {
  console.log(item); // 1 2 3
}

// 4) 이터러블과 유사 배열 객체

const arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};

for (let i = 0; i < arrayLike.length; i++) {
  console.log(arrayLike[i]); // 1 2 3
}

// for (const item of arrayLike) { error
//   console.log(item);
// }

// ES6부터 도입된 Array.from 메서드를 사용하여 배열로 간단하게 변환 가능

const arr = Array.from(arrayLike);
console.log(arr); // [1, 2, 3]

// 5) 이터레이션 프로토콜의 필요성
// ES6부터는 순회 가능한 데이터 컬렉션을 이터레이션 프로토콜을 준수하는
// 이터러블로 통일하여 for...of문, 스프레드 문법, 배열 디스트럭처링 할당의
// 대상으로 사용하도록 통일했다

// 데이터 소바자와 데이터 공급자를 연결하는 인터페이스의 역할을 한다

// 6) 사용자 정의 이터러블

// ✅ 사용자 정의 이터러블 구현

const fibonacci = {
  [Symbol.iterator]() {
    let [pre, cur] = [0, 1];
    const max = 10;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { value: cur, done: cur >= max };
      },
    };
  },
};

for (const num of fibonacci) {
  console.log(num); // 1 2 3 5 8
}

const arr1 = [...fibonacci];
console.log(arr1); // [1, 2, 3, 5, 8]

const [first, second, ...rest1] = fibonacci;
console.log(first, second, rest1); // 1 2 [3, 5, 8]

// ✅ 이터러블을 생성하는 함수

const fibonacciFunc = function (max) {
  let [pre, cur] = [0, 1];
  return {
    [Symbol.iterator]() {
      return {
        next() {
          [pre, cur] = [cur, pre + cur];
          return { value: cur, done: cur >= max };
        },
      };
    },
  };
};

for (const num of fibonacciFunc(10)) {
  console.log(num); // 1 2 3 5 8
}

// ✅ 이터러블이면서 이터레이터인 객체를 생성하는 함수

const iterable = fibonacciFunc(5);

const iterator2 = iterable[Symbol.iterator]();

console.log(iterator2.next()); // {value: 1, done: false}
console.log(iterator2.next()); // {value: 2, done: false}
console.log(iterator2.next()); // {value: 3, done: false}
console.log(iterator2.next()); // {value: 5, done: true}
