const add = (a: number, b: number) => {
  return a + b;
};

// 반환값의 타입을 명시하지 않아도 inference로 인해 타입스크립트 스스로 반환값을 예상함
// 하지만 의도치 않은 결과를 초래할 수 있어 annotation형태인 직접 명시하는 것이 좋음

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const forecast = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
