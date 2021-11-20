// Chapter 46) 제너레이터와 async/await

// 1) 제너레이터란?
// ES6에 도입되어 코드 블록의 실행을 일시 중지했다가 필요한 시점에 재개할 수
// 있는 특수한 함수

// 2) 제너레이터 함수의 정의
// function* 키워드로 선언

// 3) 제너레이터 객체
// 호출하면 일반 함수처럼 함수 코드 블록을 실행하는 것이 아니라 제너레이터
// 객체를 생성해 반환한다. 제너레이터 함수가 반환한 제너레이터 객체는
// 이터러블이면서 동시에 이터레이터다

function* getFunc() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (e) {
    console.log(e);
  }
}

const generator = getFunc();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next("End!"));
// {value: "End!", done: true}

// 4) 제너레이터의 일시 중지와 재개
// - yield 키워드는 제너레이터 함수의 실행을 일시 중지시키거나 yield 키워드
// 뒤에 오는 표현식의 평가 결과를 제너레이터 함수 호출자에게 반환한다
// - 제너레이터 객체의 next 메서드를 호출하면 yield 표현식까지 실행되고
// 일시 중지된다. 이때 함수의 제어권이 호출자로 양도된다

// 5) 제너레이터의 활용
// ✅ 이터러블의 구현

// 6) async/await 😍
// ES8에 도입되어 제너레이터보다 간단하고 가독성 좋게 비동기 처리를 동기
// 처리처럼 동작함

// ✅ async 함수
// await 키워드는 반드시 async 함수 내부에서 사용해야 한다

// ✅ await 키워드
// 프로미스가 settled 상태가 될때까지 대기하다가 settled 상태가 되면
// 프로미스가 resolve한 처리 결과를 반환한다

// ✅ 에러 처리
// try...catch문 사용한다
// async 함수 내에서 catch문을 사용해서 에러처리를 하지 않으면 async 함수는
// 발생한 에러를 reject하는 프로미스를 반환한다
