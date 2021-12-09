// 1. var를 지양하자

// var : 함수 스코프
// let, const : 블록 스코프 , TDZ => 안전하게 코드 작성 가능

console.log(name);

var name = "이름";
var name = "이름2";
var name = "이름3";
var name = "이름3";

// var은 재선언이 가능함

let name1 = "안녕";
name1 = "Hello";

const name2 = "이름";
