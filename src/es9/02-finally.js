function anotherFunction() {
    return new Promise ((resolve, reject) => {
        if (false) {
            resolve("Hey!");
        }
        else {
            reject("Ops!");
        };
    });
};

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log("Termino!!"));