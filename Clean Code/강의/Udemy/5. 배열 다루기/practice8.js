// 8. map vs forEach

// forEach : 매개변수로 들어오는 콜백 함수만 실행시킴, 반환값이 없음
// map : 매개변수로 들어오는 콜백 함수를 실행시키고, 반환값도 존재함

// Example 1

const prices = ["1000", "2000", "3000"];

const newPricesForEach = prices.forEach((price) => price + "원");
const newPricesMap = prices.map((price) => price + "원");
