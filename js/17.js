/**
 *  Simulación de compra de productos: como el ejercicio anterior (16.js), pero en esta ocasión se pide que se muestre el precio total de la compra, es decir, el precio de todos los productos que se han comprado. Utiliza asincronía para que el usuario pueda seguir comprando productos hasta que decida terminar la compra.
 */

let productos = [ 
    {id: 1, nombre: "libro", precio: 320, stock: 5},
    {id: 2, nombre: "cuaderno", precio: 120, stock: 5},
    {id: 3, nombre: "lápiz", precio: 30, stock: 5},
    {id: 4, nombre: "borrador", precio: 20, stock: 5},
    {id: 5, nombre: "sacapuntas", precio: 10, stock: 5},
    {id: 6, nombre: "corrector", precio: 50, stock: 5},

];

let carrito = [];

let total = 0;

function comprarProducto(nombre, cantidad) {
    return new Promise((resolve, reject) => {
        const producto = productos.find(producto => producto.nombre === nombre);
        if (producto) {
            if (producto.stock >= cantidad) {
                carrito.push({nombre: producto.nombre, cantidad: cantidad});
                producto.stock -= cantidad;
                total += producto.precio * cantidad;
                resolve(producto);
            } else {
                reject('No hay suficiente stock');
            }
        } else {
            reject('Producto no existe');
        }
    });
}

async function compra(nombre, cantidad) {
    try {
        const producto = await comprarProducto(nombre, cantidad);
        console.log(`Se compró ${cantidad} ${producto.nombre}`);
    } catch (error) {
        console.log('Error: ', error);
    } 
}

async function compraProductos() {
    
    compra('libro', 1);
    compra('cuaderno', 2);
    compra('lapiz', 3);
    compra('borrador', 4);
    compra('sacapuntas', 5);
    compra('corrector', 6);
    compra('goma', 7);
    compra('regla', 8);
    compra('tijeras', 9);


    console.log('Productos comprados: ', carrito);
    console.log(`Total a pagar: ${total}`);
}

compraProductos();