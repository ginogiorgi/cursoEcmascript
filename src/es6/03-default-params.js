function newUser (name, age, country) {
    var name = name || 'Gino';
    var age = age || '24';
    var country = country || 'Argentina';
    console.log(name, age, country);
}

newUser();
newUser('Puto', 'Elque', 'Lee')

function newAdmin(name = 'Gino', apellido = 'Giorgi', pais = 'Argentina') {
    console.log(name, apellido, pais)
}

newAdmin();
newAdmin('Puto', 'Elque', 'Lee');