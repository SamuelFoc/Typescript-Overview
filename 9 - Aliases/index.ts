// Define a new type
type Rgb = [number, number, number];

function getRandomColor(): Rgb {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return [r, g, b];
}

const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);

// Define another new type
type User = {
  name: string;
  score: number;
};

const userOne: User = { name: "Mario", score: 42 };

function formatUser(user: User): void {
  console.log(`${user.name} has a score of ${user.score}!`);
}

formatUser(userOne);
formatUser({ name: "Joshua", score: 75 });
