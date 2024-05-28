document.addEventListener("DOMContentLoaded", function () {
    var pelicula = sessionStorage.getItem('pelicula');
    var titulo = document.getElementById('titulo');
    var descripcion = document.getElementById('descripcionP');
    var fecha = document.getElementById('fechaP');
    var director = document.getElementById('director');
    var video = document.getElementById('video');
    var estrellas1 = [
        document.getElementById('estrella1'),
        document.getElementById('estrella2'),
        document.getElementById('estrella3'),
        document.getElementById('estrella4'),
        document.getElementById('estrella5')
    ];
    

    switch (pelicula) {
        case 1:
            titulo.innerText = ''
            descripcion.innerText = ''
            fecha.innerText = ''
            director.innerText = ''
            video.setAttribute('src', '')
            video.setAttribute('title', '')
            count.setAttribute('data-rating', '');
            break;
        case 2:
            titulo.innerText = ''
            descripcion.innerText = ''
            fecha.innerText = ''
            director.innerText = ''
            video.setAttribute('src', '')
            video.setAttribute('title', '')
            count.setAttribute('data-rating', '');
            break;
        case 3:
            titulo.innerText = ''
            descripcion.innerText = ''
            fecha.innerText = ''
            director.innerText = ''
            video.setAttribute('src', '')
            video.setAttribute('title', '')
            count.setAttribute('data-rating', '');
            break;
        case 4:
            titulo.innerText = ''
            descripcion.innerText = ''
            fecha.innerText = ''
            director.innerText = ''
            video.setAttribute('src', '')
            video.setAttribute('title', '')
            count.setAttribute('data-rating', '');
            break;
        case 5:
            titulo.innerText = ''
            descripcion.innerText = ''
            fecha.innerText = ''
            director.innerText = ''
            video.setAttribute('src', '')
            video.setAttribute('title', '')
            count.setAttribute('data-rating', '');
            break;
        case 6:
            titulo.innerText = ''
            descripcion.innerText = ''
            fecha.innerText = ''
            director.innerText = ''
            video.setAttribute('src', '')
            video.setAttribute('title', '')
            count.setAttribute('data-rating', '');
            break;
        case 7:
            titulo.innerText = ''
            descripcion.innerText = ''
            fecha.innerText = ''
            director.innerText = ''
            video.setAttribute('src', '')
            video.setAttribute('title', '')
            count.setAttribute('data-rating', '');
            break;
        case 8:
            titulo.innerText = ''
            descripcion.innerText = ''
            fecha.innerText = ''
            director.innerText = ''
            video.setAttribute('src', '')
            video.setAttribute('title', '')
            count.setAttribute('data-rating', '');
            break;
    }
    
    var count = document.getElementById('estrellas');
    var rating = parseInt(count.getAttribute('data-rating'));
    for (let i = 0; i < rating; i++) {
        estrellas1[i].setAttribute('src', 'img/estrella.png');
        estrellas1[i].setAttribute('class', 'estrellaGold');
    }
});
