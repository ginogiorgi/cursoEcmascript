async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
};

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log("Hello!");

async function arrayOfNames(arr) {
    for await (let value of arr) {
        console.log(value);
    };
};

const names = arrayOfNames(["Gino", "Juan", "Francisco", "Franco"]);
console.log("After");