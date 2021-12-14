class Stack {
  constructor() {
    this.array = [];
    this.length = 0;
  }
  push(item) {
    this.length++;
    return this.array.push(item);
  }

  pop() {
    this.length--;
    return this.array.pop();
  }

  arrayLength() {
    return this.length;
  }
}

module.exports = Stack;
