// 5. 불변성

// 불변성을 유지하는 방법
// 1. 배열을 복사한다
// 2. 새로운 배열을 반환하는 메서드들을 활용한다

// Example 1

const originArray = ["123", "456", "789"];

const newArray = originArray;

originArray.push(10);
originArray.push(11);
originArray.push(12);
originArray.unshift(0);

console.log(newArray); //[0, "123", "456", "789", 10, 11, 12]
