// { name: string; age: number }
function greet(person) {
    return "Hello " + person.name;
}
function createSquare(config) {
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20,
    };
}
// Object literals get special treatment and undergo excess property checking
// when assigning them to other variables, or passing them as arguments.
//Object literal may only specify known properties, and 'opacity' does not exist in type 'SquareConfig
// let mySquare = createSquare({ width: 100, opacity: 0.5 });
let mySquare = createSquare({ width: 100, opacity: 0.5 });
function setContents(box, newContents) {
    box.contents = newContents;
}
const numberBox = { contents: 200 };
const stringBox = { contents: "hello" };
const userBox = {
    contents: [{ email: "ravisince2k@gmail.com", password: "secure password" }],
};
function insertContentInBox(existingContents, newContent) {
    existingContents.push(newContent);
    return existingContents;
}
console.log(insertContentInBox(userBox.contents, {
    email: "test",
    password: "mail",
}));
