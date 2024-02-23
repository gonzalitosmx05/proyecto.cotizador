//Elementos en el HTML
const addRows = document.getElementById('addRows');
const tabla = document.getElementById('tabla');
const pdfButton = document.getElementById('pdfButton');


//Eventos asignados
addRows.onclick = insertarFila;
pdfButton.onclick = generarPDF;

//Funcion para insertar fila nueva en tabla
function insertarFila(){
    //Creamos una nueva fila
    var fila = tabla.insertRow(); 
    //Creamos celdad en la nueva fila
    var cell1 = fila.insertCell(0);
    var cell2 = fila.insertCell(1);
    var cell3 = fila.insertCell(2);
    var cell4 = fila.insertCell(3);
    var cell5 = fila.insertCell(4);
    var cell6 = fila.insertCell(5);
    //Colocamos Valores en las celdas
    cell1.innerHTML = '<td><input class="form-control" type="text" placeholder="Descripcion"></td>';
    cell2.innerHTML = '<td><input class="form-control" type="text" placeholder="SKU"><td>';
    cell3.innerHTML = '<td><input class=" cantidad form-control" type="number" placeholder="1" onchange="calcularSubtotal(this)"><td>';
    cell4.innerHTML = '<td><input class=" precio form-control" type="number" placeholder="0.00" onchange="calcularSubtotal(this)"><td>';
    cell5.innerHTML = '<td><input class=" subtotal form-control" type="number" placeholder="0.00" onchange="calcularSubtotal(this)"><td>';
    cell6.innerHTML = '<td><button type="button" class="btn btn-danger" onclick="eliminarFila(this)">X</button><td>';
}

//Funcion asignada desde HTML
function eliminarFila(button){
    var fila = button.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
}

//Funcion asignada desde HTML
function calcularTotales(){
    var filas = document.querySelectorAll('#tabla tr');
  var totalPorProducto = 0;
  var totalGeneral = 0;

  filas.forEach(function(fila, index) {
    if (index > 0) { // Excluir la primera fila que contiene los encabezados
      var subtotal = parseFloat(fila.querySelector('.subtotal').value);
      totalPorProducto += subtotal;
    }
  });

  var subtotales = document.querySelectorAll('.subtotal');
  subtotales.forEach(function(subtotal) {
    totalGeneral += parseFloat(subtotal.value);
  });

    document.getElementById('subtotal').value = totalPorProducto.toFixed(2);
    let iva = totalPorProducto * .08;
    document.getElementById('iva').value = iva.toFixed(2);
    let total = totalPorProducto + iva;
    document.getElementById('total').value = total.toFixed(2);

}

//Funcion usada por otra funcion
function calcularSubtotal(input){
    var fila = input.parentNode.parentNode;
    var precio = parseFloat(fila.querySelector('.precio').value);
    var cantidad = parseInt(fila.querySelector('.cantidad').value);
    var subtotal = precio * cantidad;
    fila.querySelector('.subtotal').value = subtotal.toFixed(2);
    calcularTotales();
}

//Funcion para Generar Archivo PDF
function generarPDF(){
    const {jsPDF} = window.jspdf;
    const doc = new jsPDF();
    
    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf"); 
}