// Function with an numbers
function addThree(num) {
    return num + 3;
}
console.log(addThree(13.5));
// Function which works with an strings
function getUpper(val) {
    return val.toUpperCase();
}
console.log(getUpper("alex"));
// Function with an different types of arguments
function signUpUser(name, email, isPaid) {
    return "registration passed";
}
console.log(signUpUser("Alex", "alex@test.com", true));
// Arror function syntax
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
    return "Login passed successfully";
};
loginUser("Alex", "test@tset.com"); // Don't need put isPaid
// $ in functions
function greet(person) {
    console.log("Hello person ".concat(person, "!"));
}
greet("Brendan");
