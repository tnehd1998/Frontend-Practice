// 4. 임시변수 제거하기

// 임시변수 사용의 문제점
// - 임시 변수를 지주 생성하게되면 나중에 나도 모르게 변형시켜 의미를 잃음
// - 명령형으로 가득한 로직의 코드가 생성됨
// - 어디서 잘못됐는지 디버깅하기도 힘듬
// - 추가적인 코드를 작성하고 싶은 유혹에 빠짐
// - 함수는 하나의 역할만 하게 한다는 틀을 깨버림

// 임시변수 사용에 대한 해결책
// - 함수 나누기
// - 바로 반환시키기
// - 고차 함수로 만들기 (map, filter, reduce)
// - 선언형 코드로 만들기

// Example 1
// 임시변수를 제거하여 CRUD를 하려는 유혹을 없앰

function getElements() {
  const result = {}; // 임시 객체

  result.title = document.querySelector(".title");
  result.text = document.querySelector(".text");
  result.value = document.querySelector(".value");

  return result;
}

function fixedGetElements() {
  return {
    title: document.querySelector(".title"),
    text: document.querySelector(".text"),
    value: document.querySelector(".value"),
  };
}

// Example 2
// 추가적인 스펙이 주어졌을 때 문제가 생겨 바로 반환하는 형태로 수정해야함

function getDateTime(targetDate) {
  let month = targetDate.getMonth();
  let day = targetDate.getDate();
  let hour = targetDate.getHours();

  month = month >= 10 ? month : "0" + month;
  day = day >= 10 ? day : "0" + day;
  hour = hour >= 10 ? hour : "0" + hour;

  return {
    month,
    day,
    hour,
  };
}

function fixedGetDateTime(targetDate) {
  const month = targetDate.getMonth();
  const day = targetDate.getDate();
  const hour = targetDate.getHours();

  return {
    month: month >= 10 ? month : "0" + month,
    day: day >= 10 ? day : "0" + day,
    hour: hour >= 10 ? hour : "0" + hour,
  };
}

function additionalDateTime() {
  const currentDateTime = fixedGetDateTime(new Date());

  return {
    month: currentDateTime.month + "분 전",
    day: currentDateTime.day + "분 전",
    hour: currentDateTime.hour + "분 전",
  };
}

// Example 3
// 임시 변수 속에서 다른 사람이 변형을 이르킬 위험이 있음

function genRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max + 1) + min);

  return randomNumber;
}

function fixedGenRandomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1) + min);
}
