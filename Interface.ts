
//Create first object likemin Java Script
const user = { 
    id: 2,
    name: "Alex",
    age: 33
}
console.log(user.id + " " + user.name);


// Crete our Interface and then create object using Intertface
interface  userInterface {
    id: number
    name: string
    age: number
}

const newUser: userInterface = {
    id:  2,
    name: "Pedro",
    age:77
};

console.log(newUser);

