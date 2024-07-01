// Function with an numbers and must return number!!!
function addTwo(num) {
    return num + 2;
}
// Arror functions with an void and return type
var getHello1 = function (s) {
    console.log("hello " + s);
};
getHello1("Alex");
var getHello2 = function (s) {
    return "hello " + s;
};
console.log(getHello2("Alex"));
// Function which NEVER return values
function handleError(errmsg) {
    throw new Error(errmsg);
}
