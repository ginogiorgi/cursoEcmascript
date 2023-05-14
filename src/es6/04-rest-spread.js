//Arrays destructuring

let fruits = ["manzana", "banana", "naranja"];
let [a,b] = fruits;

console.log(a, b);
console.log(a, fruits[1]);

//Object destructuring

let user = {username: "Gino", age: "24"};
let {username, age} = user

console.log(username, age);
console.log(username, user.age);

//Spread operator 

let person = {name: "Gino", age: 28};
let country = "ARG";

let data = { id: 1, ...person, country};

console.log(data);

//Rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3, 4, 5);

json1 = {
    name: 'Mr. Michi',
    food: 'Pescado',
    },
json2 = {
      age: 12,
      color: 'Blanco',
    }
function solution(json1, json2){
    let data = { ...json1, ...json2 }
    return data;
}

solution(json1, json2);
