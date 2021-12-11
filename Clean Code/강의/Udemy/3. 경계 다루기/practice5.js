// 5. 매개변수의 순서가 경계다

// 호출하는 함수의 네이밍과 인자의 순서의 연관성을 고려한다
// 인자로 넘길 때, 보통 2개인 경우는 경계를 나타나는 경우가 많음
// 1. 매개변수를 2개가 넘지 않도록 만든다.
// 2. arguments, rest parameter는 규칙적이지 않은 경우에 고려함
// 3. 매개변수를 객체에 담아서 넘긴다.
// 4. 랩핑하는 함수

function someFunc(someArg, someArg) {
  // ...some code
}

genRandomNumber(1, 50);
genDates("2021-10-01", "2021-10-31");
genShuffleArray(1, 5);

function someFunc(someArg1, someArg2, someArg3, someArg4) {
  // ... some code
}

function getFunc(someArg1, someArg3) {
  someFunc(someArg1, undefined, someArg3);
}
