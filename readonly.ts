// Create a new type
type Client = {
    readonly id: string
    name: string
    email: string
    isActive: boolean
    creditcard?: number // Optionl!!!!
}
let myClient: Client = {
    id: "7777",
    name: "Alex",
    email: "a@a.com",
    isActive: false
}

//myClient.id = "1222" Can not assigned new id because it read only!!!
console.log(myClient)
