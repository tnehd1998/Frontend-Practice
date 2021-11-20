/**
 * Let's make a calculator 🧮
 */

{
  console.log(calculate_ans("add", 1, 3)); // 4
  console.log(calculate_ans("substract", 3, 1)); // 2
  console.log(calculate_ans("multiply", 4, 2)); // 8
  console.log(calculate_ans("divide", 4, 2)); // 2
  console.log(calculate_ans("remainder", 5, 2)); // 1

  type Command = "add" | "substract" | "multiply" | "divide" | "remainder";
  function calculate_ans(command: Command, a: number, b: number): number {
    switch (command) {
      case "add":
        return a + b;
      case "substract":
        return a - b;
      case "multiply":
        return a * b;
      case "divide":
        return a / b;
      case "remainder":
        return a % b;
      default:
        throw new Error(`Unknown error : ${command}`);
    }
  }
}
