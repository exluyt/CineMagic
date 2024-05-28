document.addEventListener("DOMContentLoaded", function () {
    var estrellas1 = [
        document.getElementById('estrella1'),
        document.getElementById('estrella2'),
        document.getElementById('estrella3'),
        document.getElementById('estrella4'),
        document.getElementById('estrella5')
    ];

    var count = document.getElementById('estrellas');
    var rating = parseInt(count.getAttribute('data-rating'));

    for (let i = 0; i < rating; i++) {
        estrellas1[i].setAttribute('src', 'img/estrella.png');
        estrellas1[i].setAttribute('class', 'estrellaGold');
    }

    var pelicula = sessionStorage.getItem('pelicula');
    var titulo = document.getElementById('titulo');
    var descripcion = document.getElementById('descripcion');
    var fecha = document.getElementById('fecha1');
    var director = document.getElementById('rojo');
    var video = document.getElementById('video');

    switch (pelicula) {
        case '1':
            titulo.innerText = 'Deep Sea'
            descripcion.innerText = 'Shenxiu, una joven abandonada por su madre de niña, va a ealizar un crucero con el resto de su familia durante las vacaciones de verano. Una noche, cree que el mar la llama, y -de esta forma- acaba en un lujoso restaurante que sirve cenas en un viejo submarino. Lo que ella desconoce es que todo aquello está relacionado de alguna forma con su madre.'
            fecha.innerText = '10/05/2024'
            director.innerText = 'Tian Xiaopeng'
            video.setAttribute('src', 'https://www.youtube.com/embed/GlhWF_qDEUk?autoplay=1&mute=1')
            video.setAttribute('title', 'Deep Sea tráiler')
            break;
        case '2':
            titulo.innerText = 'Furiosa: de la saga Mad Max'
            descripcion.innerText = 'En un mundo postapocalíptico donde todo ha perdido su valor, los pocos supervivientes se guían por la ley del más fuerte. Sin aprecio por la vida, lo único que despierta un brutal interés es la gasolina, sinónimo de poder y objetivo de bandas armadas hasta los dientes y sin escrúpulos.'
            fecha.innerText = ' 24/05/2024'
            director.innerText = 'George Miller'
            video.setAttribute('src', 'https://www.youtube.com/embed/S3Vx7TZ0yZw?autoplay=1&mute=1')
            video.setAttribute('title', 'Furiosa: de la saga Mad Max tráiler')
            break;
        case '3':
            titulo.innerText = 'Caída libre'
            descripcion.innerText = 'Marisol está muy cerca de los 60 años de edad. Trabaja como entrenadora de gimnasia rítmica de élite, y es la mejor en lo suyo. Metódica, controladora, autoritaria, dominante, fácilmente irritable y carente de la menor capacidad de autocrítica., ha moldeado su realidad como ha querido. Sin embargo, todo se viene abajo cuando Octavio (su esposo), le dice que se marcha de casa para empezar una nueva vida junto a una mujer más joven con la que va a ser padre.'
            fecha.innerText = '17/05/2024'
            director.innerText = 'Laura Jou'
            video.setAttribute('src', 'https://www.youtube.com/embed/AhrOksKAxxY?autoplay=1&mute=1')
            video.setAttribute('title', 'Caída libre tráiler')
            break;
        case '4':
            titulo.innerText = 'Nina'
            descripcion.innerText = 'Nina se marcho de su pequeño pueblo cuando tan solo era una adolescente para probar suerte como actriz. Sin embargo, ahora, treinta años más tarde ha vuelto enferma y fracasada con el objetivo de vengarse del hombre que abusó de ella.'
            fecha.innerText = '10/05/2024'
            director.innerText = 'Andrea Jaurrieta'
            video.setAttribute('src', 'https://www.youtube.com/embed/lNuvk8UzbgA?autoplay=1&mute=1')
            video.setAttribute('title', 'Nina tráiler')
            break;
        case '5':
            titulo.innerText = 'Immaculate'
            descripcion.innerText = 'Cecilia (Sidney Sweeney), una devota religiosa que vive en Estados Unidos, se embarca en un nuevo viaje a un recóndito convento de la lejana campiña italiana. La cercana bienvenida que recibe por parte del Padre Sal Tedeschi (Álvaro Morte) a su llegada, se transforma rápidamente en el horror cuando descubre que su nuevo hogar esconde un horrible secreto y un mal indescriptible.'
            fecha.innerText = '01/05/2024'
            director.innerText = 'Michael Mohan'
            video.setAttribute('src', 'https://www.youtube.com/embed/lywekKHvLjo?autoplay=1&mute=1')
            video.setAttribute('title', 'Immaculate tráiler')
            break;
        case '6':
            titulo.innerText = 'Rivales'
            descripcion.innerText = 'El sueño de Tashi siempre fue dedicarse al tenis y ser una jugadora de este deporte de talla mundial. Sin embargo, el destino y sus habilidades quisieron que esto no fuera así. Ahora, que sus aspiraciones quedaron lejos, trabaja como entrenadora de su marido, Art. Su esposo comenzó como un jugador que dejaba bastante que desear, se lo podría llamar mediocre incluso. Pero las destrezas de Tashi lo convirtieron en un campeón de Grand Slam. Ahora, que la carrera de su marido no pasa por su mejor momento, lo apunta al torneo Callenger y allí se encontrará con su pasado.'
            fecha.innerText = '26/04/2024'
            director.innerText = ' Luca Guadagnino'
            video.setAttribute('src', 'https://www.youtube.com/embed/2_ojxFOrAgQ?autoplay=1&mute=1')
            video.setAttribute('title', 'Rivales tráiler')
            break;
        case '7':
            titulo.innerText = 'Abigail'
            descripcion.innerText = 'Tras secuestrar a una bailarina de 12 años que es la hija de un poderoso jefe mafioso, a una banda de delincuentes solo les queda el cometido de vigilar a la niña durante una noche para cobrar el rescate de 50 millones de dólares. En una mansión alejada de todo, los raptores empiezan a desaparecer uno a uno y descubren, con creciente horror, que están encerrados con una niña nada normal.'
            fecha.innerText = '19/04/2024'
            director.innerText = 'Matt Bettinelli-Olpin, Tyler Gillett'
            video.setAttribute('src', 'https://www.youtube.com/embed/SoLCxyHpstY?autoplay=1&mute=1')
            video.setAttribute('title', 'Abigail tráiler')
            break;
        case '8':
            titulo.innerText = 'Sangre en los labios'
            descripcion.innerText = 'Thriller de venganza que narra la electrizante historia de amor y crimen entre Lou (Kristen Stewart), una solitaria gerente de gimnasio, y Jackie (Katy O’Brian), una recién llegada a Las Vegas en busca de su sueño de ser culturista. Como una frenética reacción en cadena, su pasión las empujará hacia la violenta red criminal de la familia de Lou. Excesos, ambición y amor explosivo combinados con el drama de una familia.'
            fecha.innerText = '12/04/2024'
            director.innerText = 'Rose Glass'
            video.setAttribute('src', 'https://www.youtube.com/embed/S_ZuMAC6s8U?autoplay=1&mute=1')
            video.setAttribute('title', 'Sangre en los labios tráiler')
            break;
    }
});