const usuario = {
    nome:'Camilla',
    idade: 19,
    endereco:{
        cidade: 'Salvador',
        estado: 'BA',
    },
};

const { nome, idade, endereco:{ cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({nome, idade}){
    console.log(nome, idade);
}

mostraNome(usuario);
