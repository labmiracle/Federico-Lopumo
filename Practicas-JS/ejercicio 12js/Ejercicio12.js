function adivinarNumero() {
    const nivel = prompt("Ingrese el nivel de dificultad (1, 2 o 3):");
    let intentos = 0;
    let rangoMinimo = 1;
    let rangoMaximo;
    let numeroAleatorio;
  
    switch (nivel) {
      case "1":
        rangoMaximo = 10;
        break;
      case "2":
        rangoMaximo = 50;
        break;
      case "3":
        rangoMaximo = 100;
        break;
      default:
        alert("Nivel inválido");
        return;
    }
  
    numeroAleatorio = Math.floor(Math.random() * (rangoMaximo - rangoMinimo + 1)) + rangoMinimo;
    
    while (true) {
      const numeroIngresado = prompt(`Adivina el número entre ${rangoMinimo} y ${rangoMaximo}:`);
      intentos++;
      
      if (numeroIngresado === null) {
        alert("Juego cancelado");
        return;
      }
      
      const numero = parseInt(numeroIngresado);
      
      if (isNaN(numero) || numero < rangoMinimo || numero > rangoMaximo) {
        alert("Número inválido");
        continue;
      }
      
      if (numero < numeroAleatorio) {
        alert("El número es mayor");
      } else if (numero > numeroAleatorio) {
        alert("El número es menor");
      } else {
        alert(`¡Acertaste en ${intentos} intentos!`);
        return;
      }
    }
  }
  