const user = {
    username: "chese890",
    edad: 24,
    country: "ARG",
};

const {username, ...values} = user;
console.log(username);
console.log(values);