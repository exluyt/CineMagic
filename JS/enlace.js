var peliculas = [
    document.getElementById('peli1'),
    document.getElementById('peli2'),
    document.getElementById('peli3'),
    document.getElementById('peli4'),
    document.getElementById('peli5'),
    document.getElementById('peli6'),
    document.getElementById('peli7'),
    document.getElementById('peli8')
];

// Agrega un evento de clic a cada elemento de película
peliculas.forEach(function (pelicula, index) {
    pelicula.addEventListener('click', function () {
        // Guarda el ID de la película en sessionStorage
        sessionStorage.setItem('pelicula', index + 1);

        // Redirige al usuario a la página de detalles de la película
        window.location.href = 'Pelicula.html'; // Cambia esto a la URL de tu página de detalles de película
    });
});