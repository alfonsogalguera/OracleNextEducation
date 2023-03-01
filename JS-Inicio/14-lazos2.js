
const precioCiudad = new Array(500, 400, 300, 200);
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");
const presupuestoDisponible = 210;

const datos = [
    {
    'ciudad': 'Bogota',
    'precio': 500
},
{
    'ciudad': 'Lima',
    'precio': 400
},
{
    'ciudad': 'Santiago',
    'precio': 300
},
{
    'ciudad': 'Montevideo',
    'precio': 200
}
];
let i = 0;
let ciudadSeleccionada = '';
do{
    if(datos[i].precio < presupuestoDisponible){
        ciudadSeleccionada = datos[i].ciudad;
    }
    i++
}
while(i < datos.length && ciudadSeleccionada == '')
if(i > ciudadesDisponibles.length){
    console.log("no tenemos pasajes disponibles")
}else{
    console.log("Puedes comprar el boleto para: "+ ciudadSeleccionada)
}

