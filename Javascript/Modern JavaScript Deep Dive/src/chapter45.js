// Chapter 45) 프로미스
// ES6에 도입되어 전통적인 콜백 패턴이 가진 단점을 보완하며 비동기 처리 시점을
// 명확하게 표현할 수 있다는 장점이 있다

// 1) 비동기 처리를 위한 콜백 패턴의 단점
// ✅ 콜백 헬 : 콜백 함수 호출이 중첩되어 복잡도가 높아지는 현상

// ✅ 에러 처리의 한계

// 2) 프로미스의 생성
// 프로미스의 상태는 resolve 또는 reject 함수를 호출하는 것으로 결정된다
// 프로미스는 비동기 처리 상태와 처리 결과를 관리하는 객체다

// 3) 프로미스의 후속 처리 메서드
// 프로미스의 비동기 처리 상태가 변화하면 후속 처리 메서드에 인수로 전달한
// 콜백 함수가 선택적으로 호출된다

// ✅ Promise.prototype.then : 두 개의 콜백 함수를 인수로 전달받음
// 1. 첫번째 콜백 함수 : fulfilled 상태에 호출
// 2. 두번째 콜백 함수 : rejected 상태에 호출

// ✅ Promise.prototype.catch : 프로미스가 rejected 상태에 호출

// ✅ Promise.prototype.finally : 프로미스의 성공과 실패와 상관없이
// 무조건 한번 호출된다

// 4) 프로미스의 에러처리 : then 메서드의 두번째 콜백 함수로 처리 가능

// 에러 처리는 then 메서드에서 하지 말고 catch 메서드에서 하는 것을 권장함

// 5) 프로미스 체이닝 : 콜백 헬을 해결한다
// then, catch, finally 후속 처리 메서드는 언제나 프로미스를 반환하므로
// 연속적으로 호출 가능

// 6) 마이크로태스크 큐 : 태스크 큐보다 우선순위가 높아 먼저 실행됨

// 7) fetch : HTTP 응답을 나타내는 Response 객체를 래핑한 프로미스
// 객체를 반환함
