In TypeScript, **functions** are first-class citizens and can be typed in various ways to ensure the safety and clarity of your code. You can define both the parameters and the return type of a function.

### Basic Function Syntax:

You can specify the type of each parameter and the return type of the function.

```typescript
function add(x: number, y: number): number {
  return x + y;
}
```

In the above example:

- The parameters `x` and `y` are typed as `number`.
- The return type of the function is also `number` (after the colon `: number`).

If no return type is specified, TypeScript will infer it. However, explicitly declaring it improves code readability and reduces errors.

### Function Type Annotations:

You can define the type of a function separately, including parameter and return types, like this:

```typescript
let subtract: (x: number, y: number) => number;

subtract = (a: number, b: number) => {
  return a - b;
};
```

This states that `subtract` is a function that takes two numbers as arguments and returns a number.

### Optional and Default Parameters:

- **Optional parameters**: You can make parameters optional using `?`. Optional parameters must appear after required parameters.

  ```typescript
  function greet(name: string, greeting?: string): string {
    return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
  }
  ```

- **Default parameters**: You can assign default values to parameters.

  ```typescript
  function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
  }
  ```

### Void and Never Return Types:

- **`void`** is used when a function doesn't return a value (e.g., it only performs side effects like logging).

  ```typescript
  function logMessage(message: string): void {
    console.log(message);
  }
  ```

- **`never`** is used when a function will never return (e.g., a function that always throws an error or runs infinitely).

  ```typescript
  function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
  }
  ```

### Function Overloading:

TypeScript supports function overloading, where multiple function signatures can be defined for the same function, allowing different parameter and return types.

```typescript
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}
```

This allows the `combine` function to work with both strings and numbers.

### Arrow Functions:

Arrow functions have a shorter syntax and are commonly used in TypeScript. Their typing is similar to regular functions.

```typescript
const multiply = (x: number, y: number): number => x * y;
```

In summary, functions in TypeScript can be fully typed for parameters, return types, and even specific function types, ensuring strong type safety and better code maintainability.
