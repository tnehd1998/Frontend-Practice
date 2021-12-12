// 7. Early Return

// 1. 함수를 미리 종료
// 2. 코딩하기가 편함, 생각하기가 편함

// Example 1

function loginService(isLogin, user) {
  if (!isLogin) {
    if (checkToken()) {
      if (!user.nickName) {
        return registerUser(user);
      } else {
        refreshToken();

        return "로그인 성공";
      }
    } else {
      throw new Error("No Token");
    }
  }
}

function login() {
  refreshToken();

  return "로그인 성공";
}

function fixedLoginService(isLogin, user) {
  if (isLogin) {
    return;
  }

  if (!checkToken()) {
    throw new Error("No Token");
  }

  if (!user.nickName) {
    return registerUser(user);
  }

  login();
}

// Example 2

function 오늘하루(condition, weather, isJob) {
  if (condition === "GOOD") {
    공부();
    게임();
    유튜브보기();

    if (weather === "GOOD") {
      운동();
      빨래();
    }

    if (isJob === "GOOD") {
      야간업무();
      조기취침();
    }
  }
}

function fixed오늘하루(condition, weather, isJob) {
  if (condition !== "GOOD") {
    return;
  }

  공부();
  게임();
  유튜브보기();

  if (weather !== "GOOD") {
    return;
  }

  운동();
  빨래();

  if (isJob !== "GOOD") {
    return;
  }

  야간업무();
  조기취침();
}
