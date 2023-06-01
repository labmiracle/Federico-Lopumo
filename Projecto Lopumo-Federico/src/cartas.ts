//Juego de cartas

interface Carta {
    valor: number;
    palo: string;
}

interface Mazo {
    cartas: Carta[];
}

class JuegoDeCartas {
    private mazo: Mazo;

    constructor() {
        this.mazo = {
            cartas: [],
        };
        // Generar todas las cartas del mazo
        for (let i = 0; i < 4; i++) {
            for (let j = 1; j <= 13; j++) {
                let palo = "";
                switch (i) {
                    case 0:
                        palo = "corazones";
                        break;
                    case 1:
                        palo = "diamantes";
                        break;
                    case 2:
                        palo = "treboles";
                        break;
                    case 3:
                        palo = "espadas";
                        break;
                }
                this.mazo.cartas.push({
                    valor: j,
                    palo: palo,
                });
            }
        }
    }

    private obtenerCartaAlAzar(): Carta {
        const numCartas = this.mazo.cartas.length;
        const cartaIdx = Math.floor(Math.random() * numCartas);
        const carta = this.mazo.cartas[cartaIdx];
        this.mazo.cartas.splice(cartaIdx, 1); // Eliminar la carta del mazo
        return carta;
    }

    jugar(): void {
        const jugador1 = this.obtenerCartaAlAzar();
        const jugador2 = this.obtenerCartaAlAzar();
        console.log(`Jugador 1 sacó ${jugador1.valor} de ${jugador1.palo}`);
        console.log(`Jugador 2 sacó ${jugador2.valor} de ${jugador2.palo}`);
        if (jugador1.valor > jugador2.valor) {
            console.log("Jugador 1 gana!");
        } else if (jugador1.valor < jugador2.valor) {
            console.log("Jugador 2 gana!");
        } else {
            console.log("Empate! Se vuelve a jugar.");
            this.jugar(); // Repetir el proceso
        }
    }
}

const juego = new JuegoDeCartas();
juego.jugar();



