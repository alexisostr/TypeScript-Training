// Function with an numbers and must return number!!!
function addTwo(num: number) : number{
    return num +2
}

// Arror functions with an void and return type
const getHello1 = (s: string) :void=>{
    console.log("hello " + s)
}
getHello1("Alex")

const getHello2 = (s: string) :string=>{
    return "hello " + s
}
console.log(getHello2("Alex"))

// Function which NEVER return values
function handleError(errmsg: string): never{
    throw new Error(errmsg)

}



