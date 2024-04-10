function greet(name: string, date: Date) {
  console.log(`Hello, ${name}`);
  console.log(`Today is ${date.toDateString()}`);
}

function add(numbers: number[]): Promise<number> {
  return new Promise((resolve, reject) => {
    resolve(numbers.reduce((n, acc) => (acc += n), 0));
  });
}

function printCoordinates(pt: { x: number; y: number }) {
  console.log(`[${pt.x}][${pt.y}]`);
}

function printGuestDetails(guest: { name: string; id?: number }) {
  console.log(`guest name ${guest?.name}`);
  if (guest.id !== undefined) console.log(`guest id ${guest.id}`);
}

function unionType(id: number | string) {
  console.log(`Your id is ${id}`);
}

function welcomePeople(guests: string[] | string) {
  if (Array.isArray(guests)) console.log(`Hello ${guests.join(" and ")}`);
  else console.log(`Hello ${guests}`);
}

greet("Ravi", new Date());
add([10, 20, 10]).then((number) => {
  console.log(number);
});
printCoordinates({ x: 10, y: 10 });
printGuestDetails({ name: "Ravi" });
unionType(23);
unionType("234");
welcomePeople(["Ravi", "Deepak", "Aman"]);
