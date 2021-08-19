// Chapter 22) this

// 1) this 키워드
// 자신이 속한 객체를 가리키는 식별자를 참조하는 것
// this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 따라 동적으로 발생
// this 바인딩 : 식별자와 값을 연결하는 과정

console.log(this); // window

function square(number) {
  console.log(this); // window
  return number * number;
}

square(2);

const person = {
  name: "Lee",
  getName() {
    console.log(this); // {name: "Lee", getName: f}
    return this.name;
  },
};

console.log(person.getName()); // Lee

function Person(name) {
  this.name = name;
  console.log(this); // Person {name: "Lee"}
}

const me = new Person("Lee");

// 2) 함수 호출 방식과 this 바인딩

// ✅ 일반 함수 호출 : 기본적으로 this에는 전역 객체가 바인딩된다
function foo() {
  console.log("foo's this : ", this); // window
  function bar() {
    console.log("bar's this : ", this); // window
  }
  bar();
}
foo();

var value = 1;

const obj = {
  value: 100,
  foo() {
    console.log("foo's this : ", this); // {value: 100, foo: f}
    console.log("foo's this.value : ", this.value); // 100
    function bar() {
      console.log("bar's this : ", this); // window
      console.log("bar's this.value : ", this.value); // 1
    }
    bar();
  },
};

obj.foo();

// 일반 함수로 호출된 모든 함수 내부의 this에는 전역 객체가 바인딩된다

const obj2 = {
  value: 100,
  foo() {
    const that = this;
    setTimeout(function () {
      console.log(that.value); // 100
    }, 100);
  },
};

obj2.foo();

const obj3 = {
  value: 100,
  foo() {
    setTimeout(
      function () {
        console.log(this.value); // 100
      }.bind(this),
      100
    );
  },
};

obj3.foo();

const obj4 = {
  value: 100,
  foo() {
    setTimeout(() => console.log(this.value), 100); // 100
  },
};
obj4.foo();

// ✅ 메서드 호출
// 메서드 내부의 this는 메서드를 소유한 객체가 아닌 메서드를 호출한 객체에
// 바인딩된다

const person3 = {
  name: "Lee",
  getName() {
    return this.name;
  },
};

console.log(person3.getName()); // Lee

const anotherPerson = {
  name: "Kim",
};
anotherPerson.getName = person3.getName;
console.log(anotherPerson.getName()); // Kim

const getName = person.getName;

console.log(getName()); // ""

// ✅ 생성자 함수 호출

function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20

const circle3 = Circle(15);
console.log(circle3); // undefined
console.log(radius); // 15

// ✅
