const calculator = require("../calculator.js");

// My Solution

test("initialize calculator", () => {
  const myCalculator = new calculator();
  expect(myCalculator).toEqual({ value: 0 });
});

test("check set function of calculator", () => {
  const myCalculator = new calculator();
  myCalculator.set(10);
  expect(myCalculator).toEqual({ value: 10 });
});

test("check clear function of calculator", () => {
  const myCalculator = new calculator();
  myCalculator.set(10);
  myCalculator.clear();
  expect(myCalculator).toEqual({ value: 0 });
});

test("check add function of calculator", () => {
  const myCalculator = new calculator();
  myCalculator.set(10);
  myCalculator.add(10);
  expect(myCalculator).toEqual({ value: 20 });
});

test("check add function of calculator throwing error", () => {
  const myCalculator = new calculator();
  try {
    myCalculator.add(101);
  } catch (err) {
    expect(err).toEqual(new Error("Value can not be greater than 100"));
  }
});

test("check substract function of calculator", () => {
  const myCalculator = new calculator();
  myCalculator.set(10);
  myCalculator.subtract(5);
  expect(myCalculator).toEqual({ value: 5 });
});

test("check multiply function of calculator", () => {
  const myCalculator = new calculator();
  myCalculator.set(10);
  myCalculator.multiply(2);
  expect(myCalculator).toEqual({ value: 20 });
});

test("check divide function of calculator", () => {
  const myCalculator = new calculator();
  myCalculator.set(10);
  myCalculator.divide(5);
  expect(myCalculator).toEqual({ value: 2 });
});

// Answer

describe("Calculator", () => {
  let cal;
  beforeEach(() => {
    cal = new calculator();
  });

  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it("clear", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("adds", () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  it("add should throw an error if value is greater than 100", () => {
    expect(() => {
      cal.add(101);
    }).toThrow("Value can not be greater than 100");
  });

  it("substracts", () => {
    cal.set(9);
    cal.subtract(2);
    expect(cal.value).toBe(7);
  });

  it("multiplies", () => {
    cal.set(9);
    cal.multiply(2);
    expect(cal.value).toBe(18);
  });

  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it("4 / 4 === 1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
