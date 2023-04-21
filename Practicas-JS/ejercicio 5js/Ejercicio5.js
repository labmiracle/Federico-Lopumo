//ejercicio 5


function camelize(str) {
    // Dividir la cadena en palabras
    const words = str.split(" ");
    
    // Transformar las palabras a camelCase
    const camelCase = words.reduce((acc, word, index) => {
      if (index === 0) {
        // La primera palabra se escribe en minúscula
        return word.toLowerCase();
      } else {
        // Las siguientes palabras se escriben en mayúscula
        return acc + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    }, "");
    
    return camelCase;
  }
  
  console.log(camelize("Hola a todos que tal"));
  // Resultado: "holaATodosQueTal"