//arrays destructuring

let fruits = ["manzana", "banana", "naranja"];
let [a,b] = fruits;

console.log(a, b);
console.log(a, fruits[1]);

//object destructuring

let user = {username: "Gino", age: "24"};
let {username, age} = user

console.log(username, age);
console.log(username, user.age);