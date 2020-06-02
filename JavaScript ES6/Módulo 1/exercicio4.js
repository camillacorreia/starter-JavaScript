// Desestruturação simples

const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nome, endereco: { cidade, estado } } = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

// Desestruturação em parâmetros

const  usuario  =  {
    name : 'Diego',
    idade : 23,
};

function mostraInfo({name, idade}) {
    console.log(`Meu nome é ${name} e tenho ${idade} anos.`);
}

mostraInfo(usuario);