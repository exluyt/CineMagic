window.addEventListener('scroll', function () {
    var nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('shrink');
    } else {
        nav.classList.remove('shrink');
    }
});

// Selecciona todos los elementos con la clase 'anime'
const elements = document.querySelectorAll('.anim');

// Añade un retraso de transición basado en el índice del elemento
elements.forEach((element, index) => {
    element.style.transitionDelay = `${index * 0.15}s`;
});

// Configura el observador
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Si el elemento está en la vista, añade la clase 'active'
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            // Si el elemento no está en la vista, quita la clase 'active'
            entry.target.classList.remove('active');
        }
    });
});

// Observa cada elemento
elements.forEach(element => {
    observer.observe(element);
});