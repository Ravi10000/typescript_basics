function greeter(fn) {
    fn("Hello, World");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function describe(fn) {
    console.log(fn.description);
}
function call(fn) {
    fn("Hello");
}
function myFn(text) {
    console.log(text);
}
myFn.description = "Hello Fn";
describe(myFn);
function firstElement(arr) {
    return arr[0];
}
const a = firstElement(["1", 2, 3, "4", true, 12]);
console.log({ a });
function constructArray(a, b
// ): (First | Second)[] {
) {
    return [a, b];
}
console.log(constructArray(123, "Developer"));
