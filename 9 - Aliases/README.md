In TypeScript, **type aliases** are a way to create custom types by giving a name to a specific type or combination of types. They allow you to define more complex types and can make your code more readable and reusable.

### Key Features of Type Aliases:

1. **Defining a Type Alias**:
   You use the `type` keyword to create a type alias. It can represent basic types, union types, intersection types, or even more complex structures.

   ```typescript
   type ID = number | string; // Alias for a union type

   let userId: ID;
   userId = 101; // Valid
   userId = "abc"; // Also valid
   ```

2. **Aliasing Object Types**:
   You can use type aliases to define object shapes similar to interfaces.

   ```typescript
   type Person = {
     name: string;
     age: number;
   };

   const person: Person = {
     name: "John",
     age: 30,
   };
   ```

3. **Union and Intersection Types**:
   Type aliases can represent union types (a value that can be one of several types) or intersection types (a combination of multiple types).

   - **Union Type**:

     ```typescript
     type Status = "active" | "inactive" | "suspended";
     let accountStatus: Status = "active";
     ```

   - **Intersection Type**:

     ```typescript
     type Address = { city: string; postalCode: string };
     type Contact = { email: string; phone: string };

     type Employee = Address & Contact; // Combines Address and Contact

     const employee: Employee = {
       city: "New York",
       postalCode: "10001",
       email: "john@example.com",
       phone: "123-456-7890",
     };
     ```

4. **Alias for Function Types**:
   You can also define aliases for function types.

   ```typescript
   type Operation = (x: number, y: number) => number;

   const add: Operation = (a, b) => a + b;
   ```

5. **Generics with Type Aliases**:
   Type aliases can be combined with generics to create reusable types.

   ```typescript
   type ApiResponse<T> = {
     data: T;
     error?: string;
   };

   let response: ApiResponse<string> = {
     data: "Success",
   };
   ```

### Difference Between Type Aliases and Interfaces:

- **Type Aliases** can define any type (primitives, unions, intersections, functions, etc.), while **Interfaces** are primarily used for defining the shape of objects.
- **Interfaces** can be extended and merged, whereas **Type Aliases** cannot be modified after creation.

### Use Cases:

- **Reusable Types**: Aliases can represent frequently used types, improving readability.
- **Complex Types**: Useful for union, intersection, and composite types.

In summary, **type aliases** provide a flexible way to define custom types, making it easier to manage complex types and increase code readability and maintainability in TypeScript.
