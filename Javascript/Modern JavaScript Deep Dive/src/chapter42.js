// Chapter 42) 비동기 프로그래밍

// 1) 동기 처리와 비동기 처리
// - 자바스크립트 엔진은 단 하나의 실행 컨텍스트 스택을 갖는다
// - 자바스크립트 엔진은 싱글 스레드 기반이기 때문에 시간이 걸리는 작업을
// 실행하는 경우 블로킹이 발생한다

// 동기 처리 : 현재 실행 중인 태스크가 종료할 때까지 다음 실행될 태스크가
// 대기하는 방식
// - 순서대로 하나씩 처리하므로 실행 순서가 보장된다는 장점이 있지만,
// 앞선 태스크가 종료할 때까지 이후 태스크들이 블로킹되는 단점이 있다

// 비동기 처리 : 현재 실행 중인 태스크가 종료되지 않은 상태라 해도 다음
// 태스크를 곧바로 실행하는 방식
// - 현재 실행 중인 태스크가 종료되지 않은 상태라 해도 다음 태스크를 곧바로
// 실행하므로 블로킹이 발생하지 않는다는 장점이 있지만, 태스크의 실행 순서가
// 보장되지 않는다는 단점이 있다

// 비동기 처리를 수행하는 비동기 함수는 전통적으로 콜백 패턴을 사용하고,
// 비동기 처리를 위한 콜백 패턴은 콜백 헬을 발생시켜 가독성을 나쁘게 하고,
// 에러의 예외 처리가 곤란하며 여러 개의 비동기 처리를 한 번에 처리하는데도
// 한계가 있다

// 2) 이벤트 루프와 태스크 큐
// 이벤트 루프 : 자바스크립트의 동시성을 지원함

// 자바스크립트 엔진은 싱글 스레드로 동작하지만 브라우저는 멀티 스레드로 작동
