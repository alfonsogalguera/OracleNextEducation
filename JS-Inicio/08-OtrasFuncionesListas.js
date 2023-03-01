const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");

//Definicion de arreglo abreviada

const paisesDisponibles = ["Colombia", "Peru", "Chile", "Brasil", "Argentina","Uruguay","Venezuela"];

const cantidadCiudades = ciudadesDisponibles.length;

console.log(`En la lista de ciudades tenemos ${cantidadCiudades} de elementos`);
console.log(`En la lista de paises tenemos ${paisesDisponibles.length} elementos`);


//remover el primer elemento
ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} de elementos`);
//remover el ultimo elemento

ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} de elementos`);


//El filtro de elementos de la lista
const paisesFiltrados = paisesDisponibles.filter((e) => e.length > 6);
console.log(paisesFiltrados);

paisesDisponibles.sort();
console.log(`Peru esta en la posicion: ${paisesDisponibles.indexOf('Peru')}`);
