// I can define a type as two possible types
let someId: number | string;

// Then I can assign a number
someId = 1;
// or string to the same variable
someId = "ji52kg6";

// ! Be aware using union types, because you can use only
// ! methods that are callable on both of these types
// ! or check the type before the actual usage

type Id = string | number;

function swapIdType(id: Id): Id {
  if (typeof id === "string") {
    return parseInt(id);
  } else {
    return id.toString();
  }
}

const idOne = swapIdType(1);
const idTwo = swapIdType("2");

console.log(idOne, idTwo);
