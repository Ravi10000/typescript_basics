interface Person {
  name: string;
  age: number;
  pan: number;
}

// { name: string; age: number }
function greet(person: Person) {
  return "Hello " + person.name;
}

// greet({ name: "Ravi" });

interface SomeType {
  readonly prop: string;
}

// Using the readonly modifier doesn’t necessarily imply that a value is totally immutable - or
// in other words, that its internal contents can’t be changed.
// It just means the property itself can’t be re-written to.

interface StringArray {
  [index: number]: string;
}

interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}

interface ReadonlyStringArray {
  readonly [index: number]: string;
}

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}

// Object literals get special treatment and undergo excess property checking
// when assigning them to other variables, or passing them as arguments.

//Object literal may only specify known properties, and 'opacity' does not exist in type 'SquareConfig
// let mySquare = createSquare({ width: 100, opacity: 0.5 });

let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
// OR
// handle extra properties other than color and width
// interface SquareConfig {
//   color?: string;
//   width?: number;
//   [propName: string]: any;
// }

// One final way to get around these checks, which might be a bit surprising, is to assign the object to another variable:
// Since assigning squareOptions won’t undergo excess property checks, the compiler won’t give you an error:
//  works only when have at least one common property color or width
// let squareOptions = { colour: "red", width: 100 };
// let mySquare = createSquare(squareOptions);

interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: number;
}
