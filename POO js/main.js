function solucion(a) {
    // Inicializamos el objeto de frecuencia
    let frecuencia = {};
    
    // Iteramos sobre los elementos de la matriz
    for (let i = 0; i < a.length; i++) {
      // Convertimos cada número en un arreglo de dígitos y los contamos
      let digitos = a[i].toString().split('');
      
      for (let j = 0; j < digitos.length; j++) {
        let digito = parseInt(digitos[j]);
        
        if (frecuencia[digito]) {
          frecuencia[digito]++;
        } else {
          frecuencia[digito] = 1;
        }
      }
    }
    
    // Encontramos los dígitos más frecuentes y los devolvemos en orden ascendente
    let maxFrecuencia = Math.max(...Object.values(frecuencia));
    let digitosMaxFrecuencia = [];
    
    for (let digito in frecuencia) {
      if (frecuencia[digito] === maxFrecuencia) {
        digitosMaxFrecuencia.push(parseInt(digito));
      }
    }
    
    return digitosMaxFrecuencia.sort(function(a, b) {
      return a - b;
    });
  }
  
  // Ejemplo de uso:
  let a = [25, 2, 3, 57, 38, 41];
  console.log(solucion(a)); // Devuelve [2, 3, 5]