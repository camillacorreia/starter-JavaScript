"use strict";

var arr = [1, 3, 4, 5, 8, 9];
var newArr = arr.map(function (item) {
  return item + 2;
});
console.log(newArr);

var teste = function teste() {
  return {
    nome: 'Camilla'
  };
};

console.log(teste());

var testedois = function testedois() {
  return [[1, 2, 3, 4, 5]];
};

console.log(testedois());

var testetres = function testetres() {
  return 'Nandes';
};

console.log(testetres());

var testequatro = function testequatro() {
  return 3;
};

console.log(testequatro());
