const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago");


let valorPasaje = 0;

console.log(`Verificando pasajes para ${ciudadDestino}`);

switch(ciudadDestino){
    case "Bogota":
        valorPasaje=500;
        break;
    case "Lima":
        valorPasaje=400;
        break;
    case "Santiago":
        valorPasaje=300;
        break;
    case "Montevideo":
        valorPasaje=200;
        break;
        default:
            console.log("No hay pasajes para la ciudad indicada.")
            break;
}
if(valorPasaje > 0){
    console.log(`el valor del pasaje es: ${valorPasaje}`);
}