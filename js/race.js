const titleMessages = ["¡Bienvenido al Juego de Autos!", "¡Prepárate para la carrera!", "¿Listo para adelantar?"];
let titleIndex = 0;

function changeTitle() {
    document.title = titleMessages[titleIndex];
    titleIndex = (titleIndex + 1) % titleMessages.length;
}


setInterval(changeTitle, 5000);

function scrollTitle() {
    titleText = titleText.substring(1) + titleText.charAt(0); // Mueve el primer carácter al final
    document.title = titleText;
}

// Desplaza el texto cada 200ms
setInterval(scrollTitle, 200);