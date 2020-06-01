"use strict";

/* Const */
var a = 1;
/* Const - Mutação */

var usuario = {
  nome: 'Camilla'
};
usuario.nome = 'Jeferson';
console.log(usuario);
/* Let */

function teste(x) {
  var y = 2;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
}

teste(10);
