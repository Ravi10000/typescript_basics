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

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircleInterface extends Colorful, Circle {}

type ColorfulCircleType = Colorful & Circle;

// instead of doing all that
interface NumberBox {
  contents: number;
}

interface StringBox {
  contents: string;
}

interface BooleanBox {
  contents: boolean;
}

function setContents(box: StringBox, newContents: string): void;
function setContents(box: NumberBox, newContents: number): void;
function setContents(box: BooleanBox, newContents: boolean): void;
function setContents(box: { contents: any }, newContents: any) {
  box.contents = newContents;
}

//  til here
//  we can do

interface Box<Type> {
  contents: Type;
}

const numberBox: Box<number> = { contents: 200 };
const stringBox: Box<string> = { contents: "hello" };

interface User {
  email: string;
  password: string;
}

const userBox: Box<User[]> = {
  contents: [{ email: "ravisince2k@gmail.com", password: "secure password" }],
};

function insertContentInBox<Type>(
  existingContents: Type[],
  newContent: Type
): Type[] {
  existingContents.push(newContent);
  return existingContents;
}

// 2 ways to give Type its type
// 1. pass it as a <parameter>
insertContentInBox<User>(userBox.contents, {
  email: "test",
  password: "mail",
});

// 2. use as clause to define any of the arguments of Type type but doesn't work for User[]
insertContentInBox(userBox.contents, {
  email: "test",
  password: "mail",
} as User);

type OrNull<Type> = Type | null;

type OneOrMany<Type> = Type | Type[];

type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;

// type OneOrManyOrNull<Type> = OneOrMany<Type> | null

type OneOrManyOrNullStrings = OneOrManyOrNull<string>;

const normalArray: Array<string> = ["red", "green", "blue"];
const roArray: ReadonlyArray<string> = ["red", "green", "blue"];

// shorthands Array<Type> -> Type[] , ReadonlyArray<Type> -> readonly Type[]

// tuple interface
interface StringNumberPair {
  // specialized properties
  length: 2;
  0: string;
  1: number;

  // Other 'Array<string | number>' members...
  // slice(start?: number, end?: number): Array<string | number>;
}

const tuple: StringNumberPair = ["hello", 24];

// optional element can be present in a tuple at end
type Either2dOr3d = [number, number, number?];

type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

// A tuple with a rest element has no set “length” - it only has a set of well-known elements in different positions.

function readButtonInput(...args: [string, number, ...boolean[]]) {
  const [name, version, ...input] = args;
  // ...
}

// is basically equivalent to:

// function readButtonInput(name: string, version: number, ...input: boolean[]) {
// ...
// }

//  both are readonly
// let point = [3, 4] as const;
// let point: readonly [number, number] = [3, 4];
