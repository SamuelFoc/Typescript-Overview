// By providing a function type and a return type,
// you guarantee the argument types and return types to the user.
function reverse(str: string): string {
  return str.split("").reverse().join("");
}

// You can only pass strings to this function;
// otherwise, the IDE will underline your code in red.
const result = reverse("hello");

// If you define a variable using a function with a declared return type,
// the IDE will automatically provide you with suggestions when you write ".".
const resultLength = result.length;

// You can also create custom types using an interface.
interface Item {
  title: string;
  price: number;
  created_at: Date;
}

// You can later use this interface in your code.
// When you access the properties of the item within your function,
// you'll receive suggestions for those properties.
function printItem(item: Item) {
  console.log(item.title, ":", item.price);
}

// When you're using the function, it will warn you if the Item passed
// has all the necessary properties and correct types.
printItem({ title: "Cup", price: 4, created_at: new Date() });
