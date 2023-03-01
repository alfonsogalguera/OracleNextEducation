const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago");


let edadPasajero = 17;
let estaAcompañado= true;

if(edadPasajero >= 18 || estaAcompañado){
    if(ciudadesDisponibles.indexOf(ciudadDestino)> -1){
        console.log("Pasaje disponible para venta")
    }else{
        console.log("Ciudad no disponible para viajar")
    }
}else{
    if(edadPasajero >= 16 && ciudadDestino == "Lima"){
        console.log("Pasaje disponible para venta")
    }else{
        console.log("El pasajero no cumple las reglas")
    }
}