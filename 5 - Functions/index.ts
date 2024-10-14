// Typing function parameters and its return value
function addNumbers(a: number, b: number): number {
  return a + b;
}

// Same for the arrow / lambda function
const subtractNumbers = (a: number, b: number): number => {
  return a - b;
};

// You can only assign this value to a number or any
let result = addNumbers(2, 4);

// More complex example
function addAllNumbers(numbers: number[]): number {
  const total = numbers.reduce((a, c) => a + c, 0);
  return total;
}

// Void function
function logGreeting(name: string, greeting: string): void {
  console.log(`${greeting}, ${name}!`);
}
