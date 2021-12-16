// 8. 직접 접근 지양하기

// 예측 가능한 코드를 작성해서 동작이 예측 가능한 앱

// Example 1)

const model = {
  isLogin: false,
  isValidToken: false,
};

// model에 직접 접근 O
function login() {
  model.isLogin = true;
  model.isValidToken = true;
}

// model에 직접 접근 O
function logout() {
  model.isLogin = false;
  model.isValidToken = false;
}

someElement.addEventListener("click", login);

// model에 대신 접근
function setLogin(bool) {
  model.isLogin = bool;
}

// model에 대신 접근
function setToken(bool) {
  model.isValidToken = bool;
}

// model에 직접 접근 X
function fixedLogin() {
  setLogin(true);
  setToken(true);
}

// model에 직접 접근 X
function fixedLogout() {
  setLogin(false);
  setToken(false);
}
