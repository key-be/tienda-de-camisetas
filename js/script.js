const bienvenido = alert("Bienvenido a la tienda camisetas!");

let remeraBlanca = 900;
let remeraNegra = 900;
let remeraAzul = 900;


const selectorProductos = () => {
    let productos = prompt(`Por favor, seleccione el numero de prenda que desea comprar:
        \n 1 - Camisa: $ ${remeraBlanca}   
        \n 2 - Pantalón: $ ${remeraNegra}
        \n 3 - Remera: $ ${remeraAzul}`
    );
    return parseInt(productos)
} 

const validacionDeProducto = () => {
    let productoSeleccionado = selectorProductos();
    if (isNaN(productoSeleccionado)) {
        alert('Por favor, ingrese el numero asociado a su producto');
        validacionDeProducto();
    } else if (productoSeleccionado >= 4) {
        alert("Número equivocado")
        validacionDeProducto(); 
    } else {
        alert(`Usted a seleccionado ${productoSeleccionado}`)
    }
}
validacionDeProducto()

const selectorTarjeta = () =>{
    let tarjeta = prompt("Con que tarjeta desea abonar? \n 1 - Visa \n 2 - MasterCard \n 3 - Amex");
    return  parseInt(tarjeta)
} 

const validarTarjeta = () => {
    let tarjetaSeleccionada = selectorTarjeta();

    if (isNaN(tarjetaSeleccionada)) {
        alert('Por favor, ingrese el numero asociado a su tarjeta');
        validarTarjeta();
    } else if (tarjetaSeleccionada >= 4) {
        alert("Número equivocado")
        validarTarjeta(); 
    } else {
        alert(`Usted a seleccionado ${tarjetaSeleccionada}`)
    }
    return  parseInt(tarjetaSeleccionada)
} 

const calcularDescuento = () => {
    let descuento = validarTarjeta()
    switch(descuento){
        case 1:
            alert("Usted tiene un 5% de descuento")   
        break;
        case 2:
            alert("Usted tiene un 8% de descuento")
        break
        case 3:
            alert("Usted tiene un 10% de descuento")
        break  
    }
    return  parseInt(descuento)
}

const resmuen = () => {
    let numeroDeDescuento = calcularDescuento()
    switch(numeroDeDescuento){
        case 1:
            alert(`Resumen: \n Precio: $900 \n Descuento 5% \n Total: $ ${900 * 0.95}`)    
        break
        case 2:
            alert(`Resumen: \n Precio: $900 \n Descuento 8% \n Total: $ ${900 * 0.92}`)
        break
        case 3:
            alert(`Resumen: \n Precio: $900 \n Descuento 10% \n Total: $ ${900 * 0.9}`)
        break
    }
}
resmuen();

const confirmacionDeCompra = alert("Gracias por su compra!")