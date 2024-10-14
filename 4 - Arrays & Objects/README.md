## Arrays:

- Arrays in TypeScript are used to store lists of values of a particular type.
- You can specify the type of elements an array will hold using either the `Type[]` or `Array<Type>` syntax.

  Example:

  ```typescript
  let numbers: number[] = [1, 2, 3, 4]; // Array of numbers
  let strings: Array<string> = ["apple", "banana", "cherry"]; // Array of strings
  ```

- Arrays can also be typed as tuples to hold a fixed number of elements of different types:
  ```typescript
  let tuple: [number, string] = [1, "apple"];
  ```

## Objects:

- Objects in TypeScript represent collections of key-value pairs.
- You can define an object type using an interface or type alias.

  Example:

  ```typescript
  interface Person {
    name: string;
    age: number;
  }

  const person: Person = {
    name: "John",
    age: 30,
  };
  ```

- You can also declare anonymous objects inline:
  ```typescript
  const car: { make: string; year: number } = { make: "Toyota", year: 2021 };
  ```

Both arrays and objects can be nested or combined to create complex data structures in TypeScript. These types are essential for organizing and managing data effectively.
