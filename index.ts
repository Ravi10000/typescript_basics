console.log("Hello TypeScript");

function greet(name: string, date: Date) {
  console.log(`Hello, ${name}`);
  console.log(`Today is ${date.toDateString()}`);
}

greet("Ravi", new Date());
