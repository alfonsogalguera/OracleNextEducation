const ciudadDestino = "Bogota";
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago");


let edadPasajero = 17;
let estaAcompañado= true;
let tienePasaporte = true;


    if((ciudadesDisponibles.indexOf(ciudadDestino)> -1) 
    && (edadPasajero>=18 && tienePasaporte)){
        console.log("Pasaje disponible para venta")
    }else{
        console.log("Ciudad no disponible para viajar")
    }
