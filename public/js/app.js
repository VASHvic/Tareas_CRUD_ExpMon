function nuevaTarea()
{
    $.ajax({
        url:"/tareas",
        type:"POST",
        data: JSON.stringify({titulo: $("#titulo").val(), fecha: $("#fecha").val(), prioridad: $("#prioridad").val()}),
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: function(data) {
            if (data.error) {
                $("#nuevoError").css('display', 'block');
                $("#nuevoOK").css('display', 'none');
            } else {
                $("#nuevoError").css('display', 'none');
                $("#nuevoOK").css('display', 'block');
            }
        }
    });
}


function borrarTarea(id) 
{
    $.ajax({
        url:"/tareas/" + id,
        type:"DELETE",
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: function(data) {
            window.location = "/tareas";
        }
    });
}