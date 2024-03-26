let i = 0
let button = document.getElementById("button")
let compteur = document.getElementById("compteur")

button.onclick = function addOne() {
            i++;
compteur.innerHTML = i;
}