import { v4 as uuidv4 } from 'uuid';
//@ts-nocheck
//npm install uuid
// npm install @types/uuid
type Item = {
    id: string,
    name: string,
    price: number,
    description: string
}

type User = {
    id: string,
    name : string,
    age :number,
    cart : Item[]
}

function createUser(name:string, age:number):User{
    let user:User ={
        id: uuidv4(),
        name: name,
        age: age,
        cart: []
    }
    return user;
}

function createItem(name:string, price:number, description:string):Item{
    let item:Item={
        id:uuidv4(),
        name: name,
        price :price,
        description: description
    }
    return item;
}

function addToCart(item:Item, user:User){
    user.cart.push(item);
}

function removeFromCart(item:Item, user:User){
    let res: Item[] = [];
    for(let i=0; i<user.cart.length; i++){
        if(user.cart[i].id !== item.id){
            res.push(user.cart[i]);
        }
    }
    user.cart = res;
}

function removeQuantityFromCart(item:Item, user:User, quantity:number){
    for(let i = 0; i < user.cart.length; i++){
        if(user.cart[i].id === item.id){
            user.cart.splice(i,quantity);
        }
    }
}

function cartTotal(user:User):number{
    let total = 0
    for(let i = 0; i < user.cart.length; i++){
        total += user.cart[i].price;
    }
    return Math.round(total * 100) / 100;
}

function printCart(user:User){
    console.log("Cart: ")
    for(let i = 0; i <  user.cart.length; i++){
        console.log(user.cart[i].name); // remove .name to print all info
    }
}

const user1 = createUser("vinh", 30);
const itemA = createItem("Shoes", 59.99, "Nike Shoes");
const itemB = createItem("Shirt", 19.99, "Nike Shirt");
const itemC = createItem("Socks", 9.99, "Nike Socks")

addToCart(itemA, user1);
printCart(user1);
console.log(cartTotal(user1));

addToCart(itemB, user1);
addToCart(itemB, user1);
addToCart(itemB, user1);
printCart(user1);
console.log(cartTotal(user1));

addToCart(itemC, user1);
addToCart(itemC, user1);
addToCart(itemC, user1);
printCart(user1);
console.log(cartTotal(user1));

removeFromCart(itemB, user1);
printCart(user1);
console.log(cartTotal(user1));

removeQuantityFromCart(itemC, user1, 2);
printCart(user1);
console.log(cartTotal(user1));

