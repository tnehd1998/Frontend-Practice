// 4. 단축평가 (short-circuit evaluation)

// && : 모두가 참이여야함

true && true && "도달함"; // "도달함"
true && false && "도달함"; // false

// || : 하나라도 참이면 가능

false && false && "도달함"; // "도달함"
true && true && "도달함 X"; // true

// Example 1

function fetchData() {
  if (state.data) {
    return state.data;
  } else {
    return "Fetching...";
  }
}

function fixedFetchData() {
  return state.data || "Fetching...";
}

// Example 2

function favoriteDog(someDog) {
  let favoriteDog;

  if (someDog) {
    favoriteDog = dog;
  } else {
    favoriteDog = "냐옹";
  }

  return favoriteDog + "입니다";
}

function fixedFavoriteDog(someDog) {
  return (someDog || "나옹") + "입니다";
}

// Example 3

function getActiveUserName(user, isLogin) {
  if (isLogin) {
    if (user) {
      if (user.name) {
        return user.name;
      } else {
        return "이름 없음";
      }
    }
  }
}

function fixedGetActiveUsername(user, isLogin) {
  if (isLogin && user) {
    return user.name || "이름 없음";
  }
}
