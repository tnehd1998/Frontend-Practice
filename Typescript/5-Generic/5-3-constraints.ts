interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`Full time!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`Part Time!!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아 추상적인 타입으로 반환하는 함수 🤮🤮
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const billy = new FullTimeEmployee();
const bob = new PartTimeEmployee();
billy.workFullTime();
bob.workPartTime();

const billyAfterPay = pay(billy);
const bobAfterPay = pay(bob);

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const obj = {
  name: "billy",
  age: 20,
};

const obj2 = {
  animal: "🦭",
};

console.log(getValue(obj, "name")); // billy
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj2, "animal")); // 🦭
