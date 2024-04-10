type Animal = {
  name: string;
  age: number;
};

type Bear = Animal & {
  honey: boolean;
};

const dog: Animal = {
  name: "chubby",
  age: 2,
};

const bear: Bear = {
  name: "po",
  age: 3,
  honey: false,
};

console.log(`${dog.name} is ${dog.age} years old`);
console.log(
  `${bear.name} is ${bear.age} years old and${
    bear.honey ? "" : " don't"
  } have honey`
);
