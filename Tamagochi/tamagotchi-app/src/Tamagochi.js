// src/Tamagotchi.js
class Tamagotchi {
  constructor(nombre, sexo) {
    this.nombre = nombre;
    this.energia = 100;
    this.sexo = sexo;
    this.sentidoDeHumor = 3;
    this.edad = 0;
    this.comidasConsumidas = 0;
  }

  comer() {
    if (this.energia < 100 && this.comidasConsumidas < 5) {
      this.energia += 25;
      this.comidasConsumidas++;
    }
  }

  dormir() {
    this.energia = 100;
  }

  beber() {
    if (this.energia < 100) {
      this.energia += 10;
    }
  }

  saltar() {
    if (this.energia >= 25) {
      this.energia -= 25;
    }
  }

  correr() {
    if (this.energia >= 10) {
      this.energia -= 10;
    }
  }

  caminar() {
    if (this.energia >= 10) {
      this.energia -= 10;
    }
  }
}

export default Tamagotchi;
