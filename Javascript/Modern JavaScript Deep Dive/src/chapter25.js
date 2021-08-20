// Chapter 25) 클래스

// 1. 클래스는 프로토타입의 문법적 설탕인가?
// - ES6의 클래스가 기존의 프로토타입 기반 객체지향 모델을 폐지하고 새롭게
// 클래스 기반 객체지향 모델을 제공하는 것은 아니다
// - 클래스는 함수이며 기존 프로토타입 기반 패턴을 클래스 기반 패턴처럼
// 사용할 수 있도록 하는 문법적 설탕이라고 볼수 있다

// - 클래스는 생성자 함수와 매우 유사하게 동작하지만 몇가지 차이가 존재함
// ✅ 클래스를 new 연산자 없이 호출하면 에러 발생
// ✅ 클래스는 상속을 지원하는 extends와 super키워드를 제공
// ✅ 클래스는 호이스팅이 발생하지 않는 것처럼 동작한다
// ✅ 클래스 내의 모든 코드에는 암묵적으로 strict mode가 지정되어 실행되며
// strict mode를 해제할 수 없다
// ✅ 클래스의 constructor, 프로토타입 메서드, 정적 메서드는 모드 열거할 수
// 없다.

// 결론적으로 클래스를 프로토타입 기반 객체 생성 패턴의 단순한 문법적 설탕으로
// 보기보다는 새로운 객체 생성 메커니즘으로 보는 것이 좀 더 합당하다

// 2. 클래스 정의

// 클래스는 일급 객체로서 다음과 같은 특징을 가짐
// - 무명의 리터럴로 생성 가능
// - 변수나 자료구조에 저장 가능
// - 함수의 매개변수에게 전달 가능
// - 함수의 반환값으로 사용 가능

class Person {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }
  static sayHello() {
    console.log("Hello!");
  }
}

const me = new Person("Lee");
console.log(me.name); // Lee
me.sayHi(); // Hi! My name is Lee
Person.sayHello(); // Hello!

// 3. 클래스 호이스팅
// 클래스는 함수로 평가됨

console.log(typeof Person); // function

// 클래스 역시 호이스팅이 발생한다

const Person2 = "";
{
  // console.log(Person2); // error
  class Person2 {}
}

// 4. 인스턴스 생성
// 클래스는 생성자 함수이며 new 연산자와 함께 호출되어 인스턴스를 생성한다

console.log(me); // Person {name: "Lee"}

// 5. 메서드
// 클래스 몸체에는 0개 이상의 메서드만 선언할 수 있다.
// 정의할 수 있는 메서드는 constructor, 프로토타입 메서드, 정적 메서드다

// ✅ constructor : 인스턴스를 생성하고 초기화하기 위한 특수 메서드

class Person3 {
  constructor(name) {
    this.name = name;
  }
}

// constructor는 반드시 하나만 존재할 수 있고, constructor를 생략하면
// 암묵적으로 빈 constructor가 생성된다

// 프로퍼티가 추가되어 초기화된 인스턴스를 생성하려면 constructor 내부에서
// this에 인스턴스 프로퍼티를 추가한다

class Person4 {
  constructor() {
    this.name = "Lee";
    this.address = "Seoul";
  }
}

const me2 = new Person4();
console.log(me2); // Person4 {name: "Lee", address: "Seoul"}

// ✅ 프로토타입 메서드

Person3.prototype.sayHi = function () {
  console.log(`Hi! My name is ${this.name}`);
};

const me3 = new Person3("Lee");
me3.sayHi(); // Hi! My name is Lee

// 클래스 몸체에서 정의한 메서드는 기본적으로 프로토타입 메서드가 된다
// 클래스는 생성자 함수와 마찬가지로 프로토타입 기반의 객체 생성 메커니즘이다

// ✅ 정적 메서드 : 인스턴스를 생성하지 않아도 호출할 수 있는 메서드
// 클래스에서는 메서드에 static 키워드를 붙히면 정적 메서드가 된다

Person.sayHello(); // Hello!

// 정적 메서드는 인스턴스로 호출할 수 없음

const me5 = new Person("Lee");
me5.sayHi(); // Hi! My name is Lee
// me5.sayHello(); // error

// ✅ 정적 메서드와 프로토타입 메서드의 차이
// 1. 정적 메서드와 프로토타입 메서드는 자신이 속해 있는 프로토타입 체인이 다름
// 2. 정적 메서드는 클래스로 호출하고 프로토타입 메서드는 인스턴스로 호출한다
// 3. 정적 메서드는 인스턴스 프로퍼티를 참조할 수 없지만 프로토타입 메서드는
// 인스턴스 프로퍼티를 참조할 수 있다

class Square {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  static area(width, height) {
    return width * height;
  }
  protoArea() {
    return this.width * this.height;
  }
}

console.log(Square.area(5, 5)); // 25

const square = new Square(10, 10);
console.log(square.protoArea()); // 100

// 정적 메서드는 어플리케이션 전역에서 사용할 유틸리티 함수를 전역함수로
// 정의하지 않고 메서드로 구조화할 때 유용하다

// ✅ 클래스에서 정의한 메서드의 특징
// 1. function 키워드를 생략한 메서드 축약 표현을 사용
// 2. 객체 리터럴과는 다르게 클래스에 메서드를 정의할 때는 콤마가 필요 없다
// 3. 암묵적으로 strict mode로 실행된다
// 4. for ... in문이나 Object.keys 메서드 등으로 열거할 수 없다.
// 5. new 연산자와 함께 호출할 수 없다

// 6. 클래스의 인스턴스 생성 과정
// ✅ 인스턴스 생성과 this 바인딩
// ✅ 인스턴스 초기화
// ✅ 인스턴스 반환

// 7. 프로퍼티
// ✅ 인스턴스 프로퍼티 : constructor 내부에서 정의

// ✅ 접근자 프로퍼티 : 다른 데이터 프로퍼티의 값을 읽거나 저장할 때
// 사용하는 접근자 함수로 구성된 프로퍼티
// - getter, setter함수로 구성되어 있음

// ✅ 클래스 필드 정의 제안
// 클래스 필드 : 클래스 기반 객체지향 언어에서 클래스가 생성할 인스턴스의
// 프로퍼티를 가리키는 용어

// this는 클래스의 constructor와 메서드 내에서만 유효하다

// ✅ private 필드 정의 제안
// 자바스크립트는 캡슐화를 완전하게 지원하지 않음
// 따라서 인스턴스 프로퍼티는 인스턴스를 통해 클래스 외부에서 언제나 참조할 수
// 있는 public 상태다

// private 필드의 선두에는 #을 붙혀준다

class Person5 {
  #name = "";
  constructor(name) {
    this.#name = name;
  }
}

const me6 = new Person5("Lee");
// console.log(me.#name); // error

// 타입스크립트부터는 접근 제한자인 public, protected, private을 모두
// 지원하며 의미 또한 기본적으로 동일하게 쓰인다 😍😍😍

// 8. 상속에 의한 클래스 확장
// ✅ 클래스 상속과 생성자 함수 상속
// 상속에 의한 클래스 확장 : 기존 클래스를 상속받아 새로운 클래스를 확장하여
// 정의하는 것

class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }
  eat() {
    return "eat";
  }
  move() {
    return "move";
  }
}

class Bird extends Animal {
  fly() {
    return "fly";
  }
}

const bird = new Bird(1, 5);

console.log(bird); // Bird {age: 1, weight: 5}
console.log(bird instanceof Bird); // true
console.log(bird instanceof Animal); // true

console.log(bird.eat()); // eat
console.log(bird.move()); // move
console.log(bird.fly()); // fly

// ✅ extends 키워드 : 상속을 통해 클래스를 확장하기 위해 사용하는 키워드

// ✅ 동적 상속 : 동적으로 상속받을 대상을 정할 수 있다

function Base1() {}
class Base2 {}

let condition = true;

class Derived extends (condition ? Base1 : Base2) {}

const derived = new Derived();
console.log(derived); // Derived()

console.log(derived instanceof Base1); // true
console.log(derived instanceof Base2); // false

// ✅ 서브클래스의 constructor

class Base {
  constructor() {}
}

class Derived1 extends Base {
  constructor(...args) {
    super(...args);
  }
}

const derived1 = new Derived1();
console.log(derived); // Derived {}

// ✅ super 키워드 : 함수처럼 호출할 수도 있고, this와 같이 식별자처럼
// 참조할 수 있는 특수한 키워드
// - super를 호출하면 수퍼클래스의 constructor를 호출한다
// - super를 참조하면 수퍼클래스의 메서드를 호출할 수 있다

// 1. super 호출 : super를 호출하면 수퍼 클래스의 constructor를 호출

class Base3 {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

class Derived2 extends Base3 {
  constructor(a, b, c) {
    super(a, b);
    this.c = c;
  }
}

const derived2 = new Derived2(1, 2, 3); // Derived {}
console.log(derived); // Derived {a: 1, b: 2, c: 3}

// - 서브클래스에서 constructor를 생략하지 않는 경우 서브클래스의
// constructor에서는 반드시 super를 호출해야 한다

// - 서브 클래스의 constructor에서 super를 호출하기 전에는 this를
// 참조할 수 없다

// - super는 반드시 서브클래스의 constructor에서만 호출된다. 서브클래스가
// 아닌 클래스의 constructor나 함수에서 super를 호출하면 에러가 발생한다

// 2. super 참조 : 메서드 내에서 super를 참조하면 수퍼클래스의 메서드를
// 호출할 수 있다

class Base4 {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `Hi! ${this.name}`;
  }
}

class Derived3 extends Base4 {
  sayHi() {
    return `${super.sayHi()}. How are you doing?`;
  }
}

const derived3 = new Derived3("Lee");
console.log(derived3.sayHi()); // Hi! Lee. How are you doing?

// 정의된 함수만을 super로 참조하여 사용할 수 있다

// ✅ 상속 클래스의 인스턴스 생성 과정

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
  toString() {
    return `width = ${this.width}, height = ${this.height}`;
  }
}

class ColorRectangle extends Rectangle {
  constructor(width, height, color) {
    super(width, height);
    this.color = color;
  }
  toString() {
    return super.toString() + `, color = ${this.color}`;
  }
}

const colorRectangle = new ColorRectangle(2, 4, "red");
console.log(colorRectangle);
// ColorRectangle {width: 2, height: 4, color: "red"}
console.log(colorRectangle.getArea()); // 8
console.log(colorRectangle.toString());
// width = 2, height = 4, color = red

// 서브클래스는 자신이 직접 인스턴스를 생성하지 않고 수퍼클래스에게 인스턴스
// 생성을 위임한다. 이것이 바로 서브클래스의 constructor에서 반드시
// super를 호출해야 하는 이유이다

// 인스턴스는 new.target이 가리키는 서브클래스가 생성한 것으로 처리된다
