/*Cambia login a logout al hacer click*/
document.getElementById("btnLogin").onclick = cambiarBoton;
function cambiarBoton() {
    var login = document.getElementById("btnLogin");
    if (login.innerHTML === "Login") {
        login.innerHTML = "Logout";
    } else {
        login.innerHTML = "Login";
    }
}
/*Eliminar boton .add definition- al hacer click*/
document.getElementById("add").onclick = eliminarBoton;
function eliminarBoton() {
    var boton = document.getElementById("add");
    boton.remove();
}
/*Alert Ninja was liked*/
document.querySelector(".btnLike").onclick = function () {
    alert("Ninja was liked");
};
