{
  // Example 1)
  // JavaScript 🤮
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript 😍
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // Example 2)
  // JavaScript 🤮
  function jsFetchNum(id) {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript 😍
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript 😍 => TypeScript
  // 1. Optional parameter
  // 해당 인자를 전달해도 되고 안해도 되는 경우

  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve", "Jobs");
  printName("Billy");
  printName("Tatis", undefined);

  // 2. Default parameter
  // 특정 인자를 전달하지 않으면 초기화된 값이 반환 됨
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  // 3. Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
