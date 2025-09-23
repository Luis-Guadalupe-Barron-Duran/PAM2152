const productos = [
    {nombre: "Laptop", precio: 12000},
    {nombre: "Mouse", precio: 250},
    {nombre: "Teclado", precio: 750},
    {nombre: "Monitor", precio: 3000}

];

const productosmayora1000= productos.filter(producto => producto.precio>1000);
const nombres= productosmayora1000.map(nombre => nombre.nombre);

console.log(nombres);