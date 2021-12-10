// 2. undefined & null

// null과 undefined는 정확한 기준을 주기가 애매함
// null, undefined : 값이 없거나 정의되지않은 명시적인 표현

// 숫자의 경우 undefined는 NaN로 나오고, null은 0으로 나옴
// 타입의 경우 undefined는 undefined로 나오고, null은 object로 나옴

console.log(!null); // true
console.log(!!null); // false

console.log(null === false); // false
console.log(!null === true); // true

// 수학적으로 null은 0으로 취급함
console.log(null + 123); // 123

// undefined: 선언했지만 값은 정의되지 않고 할당되지 않음

let value;
console.log(typeof value); // "undefined"

console.log(undefined + 10); // NaN

console.log(!undefined); // true

console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(!undefined === !null); // true
