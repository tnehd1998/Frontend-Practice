// 1. 타입 검사

// 타입은 주로 원시값과 참조값으로 나뉘어짐

// 원시값: string, boolean, number, undefined, symbol ...
// 참조값: Object, Array...

// 자바스크립트는 동적으로 변하는 언어이며, 타입 역시 동적으로 작동됨

// 타입검사를 할 때 사용하는 기능
// typeof : 타입을 확인할 때 사용되는데 null을 object로 표현하는 등 오류가 존재함
// instanceOf : 특정 객체 특정 클래스나 객체의 인스턴스 인지를 확인할 때 사용, 즉 부모가 맞는지 확인
// prototype.toString.call() : 해당 값의 타입을 반환해줌
