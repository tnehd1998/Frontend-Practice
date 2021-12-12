// 12. 드모르간의 법칙

// if(!(A || B)){
// }

// if(!A && !B){
// }

// Example 1

if (!(isValidToken && isValidUser)) {
  console.log("로그인 실패");
}

if (!isValidToken || !isValidUser) {
  console.log("로그인 실패");
}
