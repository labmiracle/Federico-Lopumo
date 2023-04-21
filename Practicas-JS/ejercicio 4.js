function palabraMasLarga(str) {
    const palabras = str.split(' ');
    let palabraMasLarga = '';
  
    for (let i = 0; i < palabras.length; i++) {
      const palabraActual = palabras[i];
      if (palabraActual.length > palabraMasLarga.length) {
        palabraMasLarga = palabraActual;
      }
    }
  
    return palabraMasLarga;
  }
  
  // Ejemplo de uso:
  console.log(palabraMasLarga('Erase una vez que se era')); // Devuelve 'Erase'

  








  function primeraMayuscula(str) {
    const palabras = str.split(' ');
  
    for (let i = 0; i < palabras.length; i++) {
      const palabraActual = palabras[i];
      palabras[i] = palabraActual.charAt(0).toUpperCase() + palabraActual.slice(1).toLowerCase();
    }
  
    return palabras.join(' ');
  }
  
  // Ejemplo de uso:
  console.log(primeraMayuscula('En un lugar de la Mancha')); // Devuelve 'En Un Lugar De La Mancha'
  