import { soma, sub, mult as multFunction} from './funcoes';
import somandoFunction from './default';
import * as funcoes from './funcoes';

console.log(soma(1,2));
console.log(sub(10,2));
console.log(somandoFunction(7,2));
console.log(multFunction(7,2));
console.log(funcoes.soma(1,2));
console.log(funcoes.sub(10,2));
console.log(funcoes.mult(7,2));
