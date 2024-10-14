In TypeScript, **union types** allow a variable to hold values of multiple types. It is defined using the `|` (pipe) symbol between two or more types. Union types help provide flexibility while maintaining type safety.

### Key Features of Union Types:

1. **Defining Union Types**:
   A union type is written by combining multiple types with the `|` symbol.

   ```typescript
   let value: string | number;
   value = "Hello"; // Valid
   value = 42; // Also valid
   ```

2. **Function Parameters with Union Types**:
   Union types can be used for function parameters, allowing flexibility for multiple input types.

   ```typescript
   function printId(id: string | number) {
     console.log(`ID: ${id}`);
   }

   printId(101); // Valid
   printId("abc"); // Valid
   ```

3. **Type Narrowing**:
   When using union types, you can check the actual type at runtime to perform specific actions based on the type (called type narrowing).

   ```typescript
   function process(value: string | number) {
     if (typeof value === "string") {
       console.log(value.toUpperCase()); // TypeScript knows value is a string here
     } else {
       console.log(value.toFixed(2)); // TypeScript knows value is a number here
     }
   }
   ```

4. **Complex Union Types**:
   Union types can be used with objects, arrays, or custom types, making them highly flexible.

   ```typescript
   type Result =
     | { success: true; data: string }
     | { success: false; error: string };

   function handleResult(result: Result) {
     if (result.success) {
       console.log(result.data);
     } else {
       console.log(result.error);
     }
   }
   ```

### Use Cases:

- **Handling multiple types** for function arguments or variables.
- **API responses** that can return different shapes or formats.

In summary, union types allow variables and functions to work with multiple types, providing flexibility while ensuring type safety through runtime checks or type narrowing.
