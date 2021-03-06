// 16.3 리덕스의 세 가지 규칙

// 16.3.1 단일 스토어
// 하나의 어플리케이션 안에는 하나의 스토어가 들어 있음
// 여러 개의 스토어를 사용하는 것이 완전히 불가능하지는 않음
// 특정 업데이트가 너무 빈번하게 일어나거나
// 어플리케이션의 특정 부분을 완전히 분리시킬 때 여러 개의 스토어를 만들수는 있음
// 하지만 상태 관리가 복잡해질 수 있으므로 권장하지 않음

// 16.3.2 읽기 전용 상태
// 리덕스 상태는 읽기 전용이다
// 상태를 업데이트할 때 기존의 객체는 건드리지 않고 새로운 객체를 생성해 주어야 한다
// 리덕스에서 불변성을 유지해야 하는 이유는 내부적으로 데이터가 변경되는 것을 감지하기 위해 얕은 비교 검사를 하기 때문
// 객체의 변화를 감지할 때 객체의 깊숙한 안쪽까지 비교하는 것이 아니라 겉핥기 식으로 비교하여 좋은 성능을 유지하는 것

// 16.3.3 리듀서는 순수한 함수
// 변화를 일으키는 리듀서 함수는 순수한 함수여야 하고, 순수한 함수의 조건
// 1. 리듀서 함수는 이전 상태와 액션 객체를 파라미터로 받음
// 2. 파라미터 외의 값에는 의존하면 안됨
// 3. 이전 상태는 절대로 건드리지 않고, 변화를 준 새로운 상태 객체를 만들어서 반환함
// 4. 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과 값을 반환해야 한다
