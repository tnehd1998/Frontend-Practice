const Stack = require("../stack.js");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("init Stack", () => {
    expect(stack).toEqual({ array: [], length: 0 });
  });

  it("push item", () => {
    stack.push(1);
    stack.push(2);
    expect(stack).toEqual({ array: [1, 2], length: 2 });
  });

  it("pop item", () => {
    stack.push(1);
    stack.push(2);
    stack.pop();
    expect(stack).toEqual({ array: [1], length: 1 });
  });

  it("length of array", () => {
    const arrayLength = stack.arrayLength();
    expect(arrayLength).toEqual(0);
  });
});
