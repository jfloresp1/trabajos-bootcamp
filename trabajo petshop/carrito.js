let carrito = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
}

function mostrarCarrito() {
    let carritoHTML = "";
    for (let i = 0; i < carrito.length; i++) {
        carritoHTML += "<li class='list-group-item'>" + carrito[i] + "</li>";
    }
    document.getElementById("carrito").innerHTML = carritoHTML;
}