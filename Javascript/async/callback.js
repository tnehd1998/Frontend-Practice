"use strict";

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// JavaScript는 동기적인 언어로 선언한 순서대로 프로그램이 작동됨

// hoisting: var, function declaration이 자동적으로 제일 위로 올라오는 것
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

// Synchronous callback
// 동기적인 콜백함수, 프로그램 시작과 동시에 실행되는 콜백함수
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// Asynchronous callback
// 비동기적인 콜백함수, 프로그램 중 언제 실행될지 알 수가 없음
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "billy" && password === "mac") ||
        (id === "coder" && password === "book")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "billy") {
        onSuccess({ name: "billy", role: "student" });
      } else if (user === "coder") {
        onSuccess({ name: "coder", role: "programmer" });
      } else {
        onError(new Error("no success"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("Enter your id");
const password = prompt("Enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
