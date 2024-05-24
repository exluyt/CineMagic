//Agregamos in evento al boton de inicio de sesion
document.addEventListener("DOMContentLoaded", function () {
    var registro = document.getElementById('registro');

    document.getElementById('login').addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto

        var user = document.getElementById('user').value; // Agregamos el valor del usuario en una variable
        var pwd = document.getElementById('pwd').value;  // Agregamos el valor de la contraseña en una variable

        // Agregamos los valores en un array
        var usuarios = [
            { user: 'nacho', pwd: '1234' },
            { user: 'mario', pwd: '1234' },
            { user: 'kiss', pwd: '1234' },
            { user: 'henry', pwd: '1234' }
        ];

        // Añadimos el usuario registrado si existe en sessionStorage
        var userR = sessionStorage.getItem('user-r');
        var pwdR = sessionStorage.getItem('pwd-r');
        if (userR && pwdR) {
            usuarios.push({ user: userR, pwd: pwdR });
        }

        var error = document.getElementById('error'); // Agregamos una variable para almacenar la alerta
        var usuarioCorrecto = false;

        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].user == user && usuarios[i].pwd == pwd) {
                usuarioCorrecto = true;
                break;
            }
        }
        // Condición para comprobar si es correcto o no
        if (usuarioCorrecto) {
            window.location.href = "menu.html";
        } else {
            error.style.visibility = 'visible';
        }
    });

    // script para el registro
    document.getElementById('registro').addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío del formulario por error

        // Cogemos los campos usuario y contraseña
        let user = document.getElementById("user-r").value;
        let pwd = document.getElementById("pwd-r").value;

        // Validación manual
        if (registro.checkValidity()) {
            // Almacenamos los datos para pasarlos al inicio de sesión
            sessionStorage.setItem('user-r', user);
            sessionStorage.setItem('pwd-r', pwd);

            // Pulsamos en la checkbox para cambiar al inicio de sesión con la animación
            var checkbox = document.getElementById('cambio-modo');
            checkbox.click(); // Simular clic en la checkbox
        }
    });
});