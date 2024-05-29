function enviarFormulario(event) {
    event.preventDefault();
/*  guardamos los valores de los elementos especificados por la id, y los valores de las checkbox seleccionadas*/
    var año = document.getElementById("año").value;
    var email = document.getElementById("email").value;
    var pelicula = document.getElementById("pelicula").value;
    var idiomaPelicula = document.getElementById("idiomaPelicula").value;
    var recibirOfertas = document.getElementById("ofertasCheckbox").checked;
    var recibirActualizaciones = document.getElementById("actualizacionesCheckbox").checked;
    var aceptarDeclaraciones = document.getElementById("declaracionCheckbox").checked;
/*Son guardadas en el siguiente objeto */
    var datosFormulario = {
        año: año,
        email: email,
        pelicula: pelicula,
        idiomaPelicula: idiomaPelicula,
        recibirOfertas: recibirOfertas,
        recibirActualizaciones: recibirActualizaciones,
        aceptarDeclaraciones: aceptarDeclaraciones
    };
    console.log(datosFormulario);
    /*recorremos un for each para guardar cada dato por separado en la localStorage */
    for (var clave in datosFormulario) {
        if (datosFormulario.hasOwnProperty(clave)) {
            LocalStorage.setItem(clave, datosFormulario[clave]);
        }
    }
    /*mensaje de confirmacion de formulario y redireccion al menu de la aplicacion */
    alert("¡Formulario enviado correctamente! Redirigiendo al menu en 3 segundos...");
    setTimeout(function() { window.location.href = "menu.html";},3000); 
}

document.querySelector("form").addEventListener("submit", enviarFormulario);
