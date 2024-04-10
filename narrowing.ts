function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function moveAnimal(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }

  return animal.fly();
}

type Human = { swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    animal;
  } else {
    animal;
  }
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// Using type predicates
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getSmallPet() {
  const now = Date.now();
  if (now % 2) {
    return {
      swim: () => {
        console.log("swim");
      },
    };
  }
  return {
    fly: () => {
      console.log("fly");
    },
  };
}

const pet = getSmallPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: Fish[] = zoo.filter(isFish);
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
// const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
//   if (pet.name === "sharkey") return false;
//   return isFish(pet);
// });

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

// type Shape = Circle | Square;

// function getArea(shape: Shape) {
//   if (shape.kind === "circle") {
//     return Math.PI * shape.radius ** 2;
//   }
// }

interface Triangle {
  kind: "triangle";
  sideLength: number;
}

type Shape = Circle | Square | Triangle;

// function getArea(shape: Shape) {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "square":
//       return shape.sideLength ** 2;
//     default:
//       const _exhaustiveCheck: never = shape;
//       return _exhaustiveCheck;
//   }
// }
