console.log("Hello TypeScript");
function greet(name, date) {
    console.log(`Hello, ${name}`);
    console.log(`Today is ${date.toDateString()}`);
}
greet("Ravi", new Date());
