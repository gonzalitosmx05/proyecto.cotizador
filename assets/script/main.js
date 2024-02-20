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
    //Colocamos Valores en las celdas
    cell1.innerHTML = '<input type="text" placeholder="Descripcion">';
    

    //PDT AGREGAR LAS CELDAS FALTANTES

}