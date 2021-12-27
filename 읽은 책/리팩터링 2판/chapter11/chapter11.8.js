// 11.8 생성자를 팩터리 함수로 바꾸기

leadEngineer = new Employee(document.leadEngineer, "E");

leadEngineer = createEngineer(document.leadEngineer);

// 📌 배경

// 팩터리 함수는 특별한 제약사항이 없고, 구현하는 과정에서 생성자를 호출할 수도 있고, 원한다면 다른
// 무언가로 대체할 수 있다.

// 📌 절차

// 1. 팩터리 함수를 만든다. 팩터리 함수의 본문에서는 원래의 생성자를 호출한다.
// 2. 생성자를 호출하던 코드를 팩터리 함수 호출로 바꾼다.
// 3. 하나씩 수정할 때마다 테스트한다.
// 4. 생성자의 가시 범위가 최소가 되도록 제한한다.
