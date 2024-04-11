type GreetFunction = (a: string) => void;

function greeter(fn: GreetFunction) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

type DescribableFunction = {
  description: string;
  (s: string): void;
};

function describe(fn: DescribableFunction) {
  console.log(fn.description);
}

function call(fn: DescribableFunction) {
  fn("Hello");
}

function myFn(text: string) {
  console.log(text);
}

myFn.description = "Hello Fn";
describe(myFn);

function firstElement<Element>(arr: Element[]): Element | undefined {
  return arr[0];
}
const a = firstElement(["1", 2, 3, "4", true, 12]);
console.log({ a });

function constructArray<First, Second>(
  a: First,
  b: Second
  // ): (First | Second)[] {
): [First, Second] {
  return [a, b];
}

console.log(constructArray(123, "Developer"));

// Type must have a length property and it's type is number
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

// generics are combining and working with multiple types
const arr = combine<string | number>([1, 2, 3], ["hello"]);

// Rule: When possible, use the type parameter itself rather than constraining it
// Rule: Always use as few type parameters as possible
// Rule: If a type parameter only appears in one location, strongly reconsider if you actually need it
// Rule: When writing a function type for a callback, never write an optional parameter unless you intend to call the function without passing that argument

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3);

// Rule: Always prefer parameters with union types instead of overloads when possible

// interface DB {
//   filterUsers(filter: (this: User) => boolean): User[];
// }

// const db = getDB();
// const admins = db.filterUsers(function (this: User) {
//   return this.admin;
// });

// Rule: void is not the same as undefined.
// Rule: object is not Object. Always use object!

// unknown type

// function f1(a: any) {
//   a.b(); // OK
// }
// function f2(a: unknown) {
//   a.b();
// }

// never
// The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
// never also appears when TypeScript determines there’s nothing left in a union.

// function fail(msg: string): never {
//   throw new Error(msg);
// }

// function fn(x: string | number) {
//   if (typeof x === "string") {
//     // do something
//   } else if (typeof x === "number") {
//     // do something else
//   } else {
//     x; // has type 'never'!
//   }
// }

const args = [8, 5] as const;
// OK
const angle = Math.atan2(...args);

interface ABC {
  a: number;
  b: number;
  // c: number;
}
interface ABC {
  c: number;
}

function sum({ a, b, c }: ABC) {
  console.log(a + b + c);
}

type voidFunc = () => void;

const f1: voidFunc = () => {
  return true;
};

const f42: voidFunc = () => true;

const f33: voidFunc = function () {
  return true;
};

function f2(): void {
  // invalid
  // @ts-expect-error
  return true;
}

const f3 = function (): void {
  // invalid
  // @ts-expect-error
  return true;
};
