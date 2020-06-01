/* Const */
const a = 1;

/* Const - Mutação */
const usuario = { nome: 'Camilla'};

usuario.nome ='Jeferson';

console.log(usuario);

/* Let */
function teste(x){
    let y = 2;

    if(x > 5){
        let y = 4;
        console.log(x, y);
    }
}
teste(10);