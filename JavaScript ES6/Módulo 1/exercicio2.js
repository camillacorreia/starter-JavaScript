const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//2.1
const idade = usuarios.map(users => users.idade);
//console.log(idade);

//2.2
const filter = usuarios.filter(users => users.empresa === 'Rocketseat' && users.idade > 18);
//console.log(filter);

//2.3
const find = usuarios.find(users => users.empresa === 'Google');
//console.log(find);

//2.4
const calculo = usuarios.map(users => ({...users, idade : users.idade * 2})).filter(users => users.idade <= 50)
console.log(calculo);