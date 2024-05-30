document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('imgMenuH');
    const panel = document.getElementById('menuH');

    let panelVisible = false;

    toggleButton.addEventListener('click', function() {
        if (panelVisible) {
            panel.classList.remove('mostrar');
            panel.classList.add('ocultar');
            toggleButton.classList.remove('rotar');
            toggleButton.classList.add('rotar-inverso');
        } else {
            panel.classList.remove('ocultar');
            panel.classList.add('mostrar');
            toggleButton.classList.remove('rotar-inverso');
            toggleButton.classList.add('rotar');
        }
        panelVisible = !panelVisible;
    });
});