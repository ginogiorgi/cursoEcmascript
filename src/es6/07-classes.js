//Declarando
class User {};

//Instancia de una clase
//Const newUser = new User();

class user {
    //metodos
    greeting() {
        return "Hello";
    };
};

const gndx = new user();
console.log(gndx.greeting());

const bebeloper = new user();
console.log(bebeloper.greeting());

//Constructor

class user {
    //Constructor
    constructor() {
        console.log("Nuevo usuario");
    }
    greeting() {
        return "Hello";
    };
};

const gino = new user(); 

//This 

class user {
    //Constructor
    constructor(name) {
        this.name = name;
    }
    //Metodos
    speak() {
        return "Hello"
    }
    greeting() {
        return `${this.speak()} bitch ${this.name}`;
    }
    };

const ana = new user("Ana");
console.log(ana.greeting());

    //setters getters

class user {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    };
    //Metodos
    speak() {
        return "Hello";
    };
    greeting() {
        return `${this.speak()} bitch ${this.name}`;
    };

    get uAge() {
        return this.age;
    };
    set uAge(n) {
        this.age = n;
    }
};

const bebeloper1 = new user("David", 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);
    