// 2. function scope & block scope

var global = "전역";

if (global === "전역") {
  var global = "지역";

  console.log(global); // 지역
}

console.log(global); // 지역

// if문은 함수가 아니기 때문에 함수 스코프인 var은 전역까지 영향을 끼침

const global = "전역";

{
  let global = "지역";

  console.log(global); // 지역
}

console.log(global); // 전역

// 블록 스코프인 let, const를 사용함으로써 안전하게 작성이 가능해짐

// const는 재할당만 불가능함
// let, const를 쓸지 헷갈리는 경우에는 무조건 const를 먼저 사용하자
