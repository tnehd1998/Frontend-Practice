// Chapter 31) RegExp

// 1) 정규 표현식이란 ?
// 문자열을 대상으로 패턴 매칭 기능을 제공하는 것
// 패턴 매칭 기능 : 특정 패턴과 일치하는 문자열을 검색하거나 추출 또는
// 치환할 수 있는 기능

let tel = "010-1234-5678";

let regExp = /^d{3}-\d{4}-\d{4}$/;

console.log(regExp.test(tel)); // false

// 한문자씩 연속해서 체크를 하는 원리

// 2) 정규 표현식의 생성

let target = "Is this all there is?";

let regexp = /is/i;

console.log(regexp.test(target)); // true

// 3) RegExp 메서드

// ✅ RegExp.prototype.exec : 인수로 전달받은 문자열에 대해 정규
// 표현식의 패턴을 검색하여 매칭 결과를 배열로 반환한다

regexp = /is/;

console.log(regexp.exec(target));
// ["is", index: 5, input: "Is this all there is?",
// groups: undefined]

// ✅ RegExp.prototype.test : 인수로 전달받은 문자열에 대해 정규
// 표현식의 패턴을 검색하여 매칭 결과를 불리언 값으로 반환한다

console.log(regexp.test(target)); // true

// ✅ String.prototype.match : 대상 문자열과 인수로 전달받은 정규
// 표현식과의 매칭 결과를 배열로 반환한다

console.log(target.match(regexp));
// ["is", index: 5, input: "Is this all there is?",
// groups: undefined]

// exec 메서드는 문자열 내의 모든 패턴을 검색하는 g 플래그를 지정해도
// 첫 번째 매칭 결과만 반환하지만, String.prototype.match 메서드는
// g 플래그가 지정되면 모든 매칭 결과를 배열로 반환한다

regexp = /is/g;

console.log(target.match(regexp)); // ["is", "is"]

// 4) 플래그
// 정규 표현식의 검색 방식을 설정하기 위해 사용한다

// i : 대소문자를 구별하지 않고 패턴을 검색한다
// g : 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색한다
// m : 문자열의 행이 바뀌더라도 패턴 검색을 계속한다

console.log(target.match(/is/gi)); // ["Is", "is", "is"]

// 5) 패턴
// 문자열의 일정한 규칙을 표현하기 위해 사용한다

// ✅ 임의의 문자열 검색 : .은 임의의 문자 하나를 의미한다

console.log(target.match(/.../g));
// ["Is ", "thi", "s a", "ll ", "the", "re ", "is?"]

// ✅ 반복 검색 : {m, n}은 최소 m번, 최대 n번 반복되는 문자열을 의미

target = "A AA B BB Aa Bb AAA";

regexp = /A{1,2}/g;
console.log(target.match(regexp));
// ["A", "AA", "A", "AA", "A"]

regexp = /A{2}/g;
console.log(target.match(regexp)); // ["AA", "AA"]

regexp = /A{2,}/g;
console.log(target.match(regexp)); // ["AA", "AAA"]

regexp = /A+/g;
console.log(target.match(regexp)); // ["A", "AA", "A", "AAA"]

target = "color colour";
regexp = /colou?r/g;
console.log(target.match(regexp)); // ["color", "colour"]

// ✅ OR 검색

target = "A AA B BB Aa Bb AAA";

regexp = /A|B/g;
console.log(target.match(regexp));
// ["A", "A", "A", "B", "B", "B", "A", "B", "A", "A", "A"]

regexp = /A+|B+/g;
console.log(target.match(regexp));
// ["A", "AA", "B", "BB", "A", "B", "AAA"]

// ✅ NOT 검색

target = "AA BB 12 Aa Bb";

regexp = /[^0-9]+/g;
console.log(target.match(regexp)); // ["AA BB ", " Aa Bb"]

// ✅ 시작 위치로 검색 : /^https/;

// ✅ 마지막 위치로 검색 : /com$/;
