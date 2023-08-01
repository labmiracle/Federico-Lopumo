function elementosUnicos(arreglo1: number[], arreglo2: number[]): number[] {
    // Unir los dos arreglos en uno solo
    const arregloCombinado = [...arreglo1, ...arreglo2];
  
    // Crear un conjunto a partir del arreglo combinado para eliminar duplicados
    const conjuntoUnico = new Set(arregloCombinado);
  
    // Convertir el conjunto nuevamente a un arreglo
    const arregloUnico = Array.from(conjuntoUnico);
  
    return arregloUnico;
  }
  
  // Ejemplo de uso
  const arreglo1 = [1, 2, 3, 4, 5];
  const arreglo2 = [3, 4, 5, 6, 7];
  
  const resultado = elementosUnicos(arreglo1, arreglo2);
  console.log(resultado); // Devuelve [1, 2, 3, 4, 5, 6, 7] - elementos únicos de ambos arreglos
  