//Funcion para insertar fila nueva en tabla
function insertarFila(){
    //Identificamos la tabla
    var tabla = document.getElementById('tabla');
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
    cell3.innerHTML = '<td><input class="form-control" type="number" placeholder="1"><td>';
    cell4.innerHTML = '<td><input class="form-control" type="number" placeholder="0.00"><td>';
    cell5.innerHTML = '<td><input class="form-control" type="number" placeholder="0.00"><td>';
    cell6.innerHTML = '<td><button type="button" class="btn btn-danger" onclick="eliminarFila(this)">X</button><td>';
}

function eliminarFila(button){
    var fila = button.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
}