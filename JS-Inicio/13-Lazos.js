
const precioCiudad = new Array(500, 400, 300, 200);
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");
const presupuestoDisponible = 390;

let i = 0;
while(precioCiudad[i] > presupuestoDisponible && i< ciudadesDisponibles.length){
    i++
}
if(i == ciudadesDisponibles.length){
    console.log("no tenemos pasajes disponibles")
}else{
    console.log("Puedes comprar el boleto para: "+ciudadesDisponibles[i])
}

