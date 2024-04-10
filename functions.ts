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
