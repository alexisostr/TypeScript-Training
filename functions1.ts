// Function with an numbers
function addThree(num: number):number{
    return num +3
}
console.log(addThree(13.5))

// Function which works with an strings
function getUpper(val: string){
    return val.toUpperCase();
}
console.log(getUpper("alex"));

// Function with an different types of arguments
function signUpUser(name: string, email:string, isPaid: boolean){
    return "registration passed";
}
console.log(signUpUser("Alex", "alex@test.com", true));

// Arror function syntax
let loginUser = (name: string, email: string, isPaid : boolean=true)=>{
 return "Login passed successfully";
}
loginUser("Alex","test@tset.com"); // Don't need put isPaid

// $ in functions
function greet(person:string) {
    console.log(`Hello person ${person}!`);
  }
   
  greet("Brendan");