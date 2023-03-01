const ciudadesDisponibles = new Array("Bogota","Lima","Santiago");
console.log(ciudadesDisponibles);

//Definicion de arreglo abreviada

const paisesDisponibles = ["Colombia", "Peru", "Chile", "Brasil", "Argentina"];


console.log(paisesDisponibles);
//agregando elemento en el ultimo espacio del array
ciudadesDisponibles.push("Monterrey");
paisesDisponibles.push("Mexico");

console.log(ciudadesDisponibles);
console.log(paisesDisponibles);

//Agregando elemento en el primer espacio del array
ciudadesDisponibles.unshift("Caldas");
paisesDisponibles.unshift("El salvador");
console.log(ciudadesDisponibles);
console.log(paisesDisponibles);

//Mostrando el primer elemento de la lista
console.log(paisesDisponibles[0])

paisesDisponibles.splice(1,2,'Venezuela', 'Paraguay');
console.log(paisesDisponibles);