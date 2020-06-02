//5.1 Rest

const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

let soma(...params) {
    return params.reduce((x, y) => x + y);
}

console.log(soma(arr));


//5.2 Spread

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: "Gabriel"} 

const usuario3 = {...usuario, endereco: {...usuario.endereco, cidade: "Lontras"}}

console.log(usuario2);
console.log(usuario3);