// 6. else 피하기

// else를 굳이 쓸 필요가 없음

// Example 1

function getActiveUserName(user) {
  if (user.name) {
    return user.name;
  } else {
    return "이름없음";
  }
}

function fixedGetActiveUserName(user) {
  if (user.name) {
    return user.name;
  }
  return "이름없음";
}

// Example 2
// Chaining처럼 된다고 착각하는 경우

function getHelloCustomer(user) {
  if (user.age < 20) {
    report(user);
  } else {
    return "안녕하세요";
  }
}

function fixedGetHelloCustomer(user) {
  if (user.age < 20) {
    report(user);
  }
  return "안녕하세요";
}
