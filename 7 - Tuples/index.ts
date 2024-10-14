// Defining TUPLE where the variables are in specific order
let person: [string, number, boolean] = ["Name", 25, false];

// Example of TUPLE usage with color codes
let hsla: [number, string, string, number];
hsla = [200, "100%", "100%", 0.8];

// Another practical example
let coordinates: [number, number];
coordinates = [1, 1];

// Example with function returning tuple
function getOriginCoordinates(): [number, number] {
  return [0, 0];
}

// * Named Tuples
let user: [name: string, age: number];
user = ["John", 36];
