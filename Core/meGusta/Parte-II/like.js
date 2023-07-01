// Obtener los botones
const botones = document.querySelectorAll('.btn');

// Itera sobre los botones y asigna el evento de clic a cada uno
botones.forEach(function (button) {
    button.addEventListener('click', function () {
        const contadorLike = button.previousElementSibling.querySelector('span');

        // Obtiene el valor actual de like y incrementa
        let count = parseInt(contadorLike.textContent);
        count++;
        contadorLike.textContent = count;
    });
});