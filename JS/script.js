//Agregamos in evento al boton de inicio de sesion
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('login').addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto

        var user = document.getElementById('user').value; //Agregamos el valor de el usuario en ula variable
        var pwd = document.getElementById('pwd').value;  //Agregamos el valor de la contraseña en ula variable

        //Agrgamos los valores en un array
        var usuarios = [
            { user: 'nacho', pwd: '1234' },
            { user: 'mario', pwd: '1234' },
            { user: 'kiss', pwd: '1234' },
            { user: 'henry', pwd: '1234' },
            { user: document.getElementById("user-r").value, pwd: document.getElementById("pwd-r").value }
        ];
        var error = document.getElementById('error'); //Agregamos una variable para almacenar la alerta
        var usuarioCorrecto = false;

        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].user == user && usuarios[i].pwd == pwd) {
                usuarioCorrecto = true;
                break;
            }
        }
        //Condicion para comprobar si es correcto o no
        if (usuarioCorrecto) {
            window.location.href = "menu.html"
        } else {
            error.style.visibility = 'visible'
        }

        /*
            let nuevoArray3 = {user: 'hola', pwd:  'adios'};
            usuarios.splice(2, 0, nuevoArray3);
        */
    });

    //script para el registro
    document.getElementById('registro').addEventListener('submit', function (event) {
        event.preventDefault();//Evita el envio del formulario por error

        //Cogemos los campos usuario y conyraseña
        let user = document.getElementById("user-r").value
        let pwd = document.getElementById("pwd-r").value

        if (form.checkValidity()) {
            //Almacenamos los datos para pasarlos al inicio de sesion
        sessionStorage.setItem('user-r', user);
        sessionStorage.setItem('pwd-r', pwd);

        //Pulsamos en la checkbox para cambiar al inicio de sesion con la animacion
        var checkbox = document.getElementById('cambio-modo');
        checkbox.click(); // Simular clic en la checkbox
        }
    });
});