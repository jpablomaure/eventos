const agregarAlCarrito = (producto) => {
    carrito.push(producto);
};

const carrito = [];

const productos = [
    { id: 1, titulo: "Aromatizador", precio: "1.500", stock:10 },
    { id: 2, titulo: "Sillón", precio: "35.000", stock:32 },
    { id: 3, titulo: "Lámpara", precio: "11.300", stock:2 },
    { id: 4, titulo: "Perchero", precio: "6.500", stock: 56 },
    { id: 5, titulo: "Sillón", precio: "28.500", stock: 15 },
    { id: 6, titulo: "Velas", precio: "1.300", stock: 20 },
    { id: 7, titulo: "Macetero simple", precio: "2.500", stock: 22 },
    { id: 8, titulo: "Macetero Doble", precio: "4.000", stock: 22 },
    { id: 9, titulo: "Espejo", precio: "3.250", stock: 70 },
    { id: 10, titulo: "Almohadon", precio: "6.800", stock: 33 },
    { id: 11, titulo: "Bordados", precio: "1.000", stock: 22 },
    { id: 12, titulo: "Almohadon especial", precio: "9.800", stock: 26 },
];
    
generarCards(productos);

function generarCards(productosAMostrar){
    let acumuladorDeCards = ``;
    productosAMostrar.forEach((elementoDelArray) => {
        acumuladorDeCards += `<div class="producto" onclick='sumarImporte(${elementoDelArray.id});'>
        <p>${elementoDelArray.titulo}</p>
        <div class="producto--prod${elementoDelArray.id}"> </div>
        <p>$${elementoDelArray.precio}</p>
    </div>`;
    
    });
    
    mostrarCardsEnElHTML(acumuladorDeCards);
}

function mostrarCardsEnElHTML(cards) {
    document.getElementById("product").innerHTML = cards;
};

function buscarProducto() {
    const tecla = document.getElementById("buscarProducto");

    tecla.addEventListener('keyup', function (event) {

        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("botonBuscar").click();
        }
    });
    const nombreProductoBuscado = document.getElementById("buscarProducto").value.toUpperCase().trim();
    console.log(nombreProductoBuscado);
    const productosEncontrados = productos.filter((producto) => {
        return producto.titulo.toUpperCase().match(nombreProductoBuscado);
        console.log(productosEncontrados);
    });

    generarCards(productosEncontrados);
}
