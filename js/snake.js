


const titleMessages = ["¡Bienvenido a la viborita!", "¡Prepárate para la ganar!", "¿Listo para jugar?"];
let titleIndex = 0;

function changeTitle() {
    document.title = titleMessages[titleIndex];
    titleIndex = (titleIndex + 1) % titleMessages.length;
}


setInterval(changeTitle, 5000);
