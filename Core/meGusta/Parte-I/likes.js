function incrementarLikes() {
    const contadorLike = document.querySelector('p span');
    // Obtiene el valor actual de like y incrementa
    let count = parseInt(contadorLike.textContent);
    count++;
    contadorLike.textContent = count;
}
