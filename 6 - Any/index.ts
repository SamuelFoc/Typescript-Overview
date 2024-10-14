// Declaring an age as type any
let age: any;

// We can assign number to it
age = 30;
// We can then reassign string to it
age = "A";
// Finally we can also reassign boolean to it
age = false;

// With type any, you can also create an array of any types
let things: any[] = ["hello", 25, false, { name: "Albert" }, ["subarray"]];

// One can use it also with functions
function hello(something: any): any {
  return something;
}

// You can pass a number to it
hello(3);
// You can pass a string also
hello("Hello");
