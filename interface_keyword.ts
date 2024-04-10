interface Animal {
  name: string;
  age: number;
}

// interface Bear extends Animal {
//   honey?: boolean;
// }
interface Animal {
  honey: boolean;
}

const bear: Animal = {
  name: "chubby",
  age: 2,
  honey: true,
};

console.log(
  `${bear.name} is ${bear.age} years old and${
    bear.honey ? "" : " don't"
  } have honey`
);
