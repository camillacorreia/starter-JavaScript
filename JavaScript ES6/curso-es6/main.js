// REST

const usuario = {
    nome: 'Camilla',
    idade: 19,
    empresa: 'Geek Business Lab'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

const arr = [1,2,3,4];

const[ a, b, ...c ] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(...params){
    return params.reduce((total, next) => total + next);
}

console.log(soma(a, b, ...params));

function soma(...params){
    return params;
}

console.log(soma(1,2,3,4,5,6,7,8,9,10));


// SPREAD

const arr1  = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
    nome: 'Nandes',
    idade: 23,
    empresa: 'Unilever',
};

const usuario2 = { ...usuario1, empresa: 'Google'};

console.log(usuario2);