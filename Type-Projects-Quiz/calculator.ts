/**
 * Let's make a calculator
 */

type Caulate = "add" | "subtract" | "multiply" | "divide" | "remainder";
function calculate(str: Caulate, num1: number, num2: number): number {
  if (str === "add") {
    return num1 + num2;
  } else if (str === "subtract") {
    return num1 - num2;
  } else if (str === "multiply") {
    return num1 * num2;
  } else if (str === "divide") {
    return num1 / num2;
  } else if (str === "remainder") {
    return num1 % num2;
  } else {
    throw Error("unknown command");
  }
}

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("subtract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
