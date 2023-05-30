
var carrito = [];
var total = 0;


function agregarAlCarrito(nombre, precio) {
  carrito.push({
    nombre: nombre,
    precio: precio
  });
  total += parseFloat(precio) ;
  actualizarCarrito();
}

function actualizarCarrito() {
  var carritoElement = document.getElementById("carrito");
  carritoElement.innerHTML = "";


  carrito.forEach(function(item) {
    var li = document.createElement("li");
    li.innerText = item.nombre + " - $" + item.precio;
    carritoElement.appendChild(li);
  });

  var totalElement = document.getElementById("total");
  totalElement.innerText = "$" + total;
}


var agregarBotones = document.getElementsByClassName("btn-agregar");
for (var i = 0; i < agregarBotones.length; i++) {
  agregarBotones[i].addEventListener("click", function(event) {
    var nombre = event.target.dataset.nombre;
    var precio = event.target.dataset.precio;
    agregarAlCarrito(nombre, precio);
  });
}

document.getElementsByClassName("btn-limpiat")
function vaciarCarrito() {
  carrito = {}; 
  console.log("Carrito vaciado");
  actualizarCarrito(); 

}
