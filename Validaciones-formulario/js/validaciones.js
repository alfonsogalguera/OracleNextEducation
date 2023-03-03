export function valida(input){
    const tipoInput = input.dataset.tipo
    if(validadores[tipoInput]){
        validadores[tipoInput(input)]
    }
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = ""
    }   
    else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoInput, input);
    }
}


const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patterMismatch",
    "customError",
];


const mensajesDeError = {
    nombre: {
        valueMissing: "Este campo nombre no puede estar vacio"
    },
    email:{
        valueMissing: "Este campo correo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    password:{
        valueMissing: "Este campo contraseña no puede estar vacio",
        patterMismatch: "Minimo 6 caractetes, maximo 12, debe contener una letra mayuscula y una minuscula, un número y no puede contener caracteres especiales."
    },
    nacimiento:{
        valueMissing: "Este campo fecha de nacimiento no puede estar vacio",
        customError: ""
    },
    numero:{
        valueMissing: "Este campo numero no puede estar vacio",
        patterMismatch: "El formato requerido es XXXXXXXXXX 10 números."
    },
    direccion:{
        valueMissing: "Este campo numero no puede estar vacio",
        patterMismatch: "El formato requerido es XXXXXXXXXX 10 números."
    },
    ciudad:{
        valueMissing: "Este campo numero no puede estar vacio",
        patterMismatch: "El formato requerido es XXXXXXXXXX 10 números."
    },
    estado:{
        valueMissing: "Este campo numero no puede estar vacio",
        patterMismatch: "El formato requerido es XXXXXXXXXX 10 números."
    }

}


const validadores = {
    nacimiento: input => validarNacimiento(input),

}

function mostrarMensajeDeError(tipoInput, input){
    let mensaje = ""
    tipoDeErrores.forEach(error =>  {
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoInput][error];
        }
    })
    return mensaje
}


const inputNacimiento = document.querySelector("#birth");



inputNacimiento.addEventListener("blur", (evento) => {
    validarNacimiento(evento.target)
})



function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
   let mensaje = ""
   if( !mayorDeEdad(fechaCliente)){
        mensaje = "Debes de tener al menos 18 deños de edad"
   }


    input.setCustomValidity(mensaje)
}



function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFecha = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());
    return diferenciaFecha <= fechaActual;
}