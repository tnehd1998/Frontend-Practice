"use strict";

// Promise is a JavaScript object for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    // resolve("billy");
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise //
  .then((value) => {
    // 작업을 성공한 경우
    console.log(value);
  })
  .catch((error) => {
    // 작업을 실패한 경우
    console.log(error);
  })
  .finally(() => {
    // 작업의 성공 유무와 관계없이 실행됨
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  //.then((hen) => getEgg(hen))
  .then(getEgg)
  //.then((egg) => cook(egg))
  //   .catch((error) => {
  //     return "🥖";
  //   })
  .then(cook)
  //.then((meal) => console.log(meal));
  .then(console.log)
  .catch(console.log);
