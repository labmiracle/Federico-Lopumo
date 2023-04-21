//ejercicio 6


const carrito = {
    productos: [
        { nombre: 'papel higienico', unidades: 4, precio: 5 },
        { nombre: 'chocolate', unidades: 2, precio: 1.5 }
    ],

    get precioTotal() {
        let total = 0;
        for (let i = 0; i < this.productos.length; i++) {
            const producto = this.productos[i];
            const subtotal = producto.precio * producto.unidades;
            total += subtotal;
        }
        return total;
    }

};

console.log(carrito.precioTotal); // Output: 23