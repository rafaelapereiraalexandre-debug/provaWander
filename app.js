// app.js
import Prestador from './Prestador.js';

// Criando 2 prestadores
const prestador1 = new Prestador(1, 'Empresa', '12.345.678/0001-99');
const prestador2 = new Prestador(2, 'Serviços BR', '98.765.432/0001-11');

// Mostrando no console
console.log('Prestador 1:');
console.log('ID:', prestador1.id);
console.log('Razão Social:', prestador1.razao_social);
console.log('CNPJ:', prestador1.cnpj);
console.log('---');

console.log('Prestador 2:');
console.log('ID:', prestador2.id);
console.log('Razão Social:', prestador2.razao_social);
console.log('CNPJ:', prestador2.cnpj);