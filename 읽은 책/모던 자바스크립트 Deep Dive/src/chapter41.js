// Chapter 41) 타이머

// 1) 호출 스케줄링
// 함수를 명시적으로 호출하지 않고 일정 시간이 경과된 이후에 호출되도록
// 함수 호출을 예약하려면 타이머 함수를 사용한다

// 자바스크립트 엔진은 싱글 스레도로 작동하며 이러한 이유로 타이머 함수는
// 비동기 처리 방식으로 동작한다

// 2) 디바운스와 스로틀

// ✅ 디바운스 : 짧은 시간 간격으로 발생하는 이벤트를 그룹화해서
// 마지막에 한 번만 이벤트 핸들러가 호출되도록 한다

// ✅ 스로틀 : 짧은 시간 간격으로 이벤트가 연속해서 발생하더라도 일정 시간
// 간격으로 이벤트 핸들러가 최대 한 번만 호출되도록 하는 것
