function tieneDuplicados(arreglo: number[]): boolean {
    // Crear un conjunto a partir del arreglo
    const conjunto = new Set(arreglo);
  
    // Comparar las longitudes para determinar si hay duplicados
    return conjunto.size < arreglo.length;
  }
  
  // Ejemplo de uso
  const arregloConDuplicados = [1, 2, 3, 4, 5, 3, 6];
  const arregloSinDuplicados = [10, 20, 30, 40, 50];
  
  console.log(tieneDuplicados(arregloConDuplicados)); // Devuelve true (hay duplicados)
  console.log(tieneDuplicados(arregloSinDuplicados)); // Devuelve false (no hay duplicados)
  