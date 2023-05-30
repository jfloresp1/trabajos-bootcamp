function calcularTotal() {
    let price1 = parseInt(document.getElementById("price1").value);
    let quantity1 = parseInt(document.getElementById("quantity1").value);
    let price2 = parseInt(document.getElementById("price2").value);
    let quantity2 = parseInt(document.getElementById("quantity2").value);

    let total = price1 * quantity1 + price2 * quantity2;
    let totalp1 = price1 * quantity1
    let totalp2 = price2 * quantity2
    let productName1 = document.getElementById("product1").value;
    let productName2 = document.getElementById("product2").value;
    
    document.getElementById("total").innerHTML = "El total es: " + total ;
    document.getElementById("totalp1").innerHTML = "El total de " + productName1 + " es: " + totalp1;
    document.getElementById("totalp2").innerHTML = "El total de " + productName2 + " es: " + totalp2;

}