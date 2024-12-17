// Je sélectionne et stock
const btnRed = document.getElementById("btn-red");
const btnBlue = document.getElementById("btn-blue");
const btnRejouez = document.querySelector("button");
let titre = document.getElementById("titre");

let compteur = 0;

// Je soumets le cercle rouge à une action
btnRed.addEventListener("click", function () {
  // Incrémenter le compteur de 1 avec la fonction
  add();
});

// Je soumets le cercle bleu à une action
btnBlue.addEventListener("click", function () {
  // Incrémenter le compteur de 1 avec la fonction
  add();
});

function add() {
  compteur = compteur + 1;
  console.log(compteur, "compteur incrementé");
  titre.innerHTML = "Compteur : " + compteur;
}

setTimeout(function () {
  // Supprime les cercles
  btnBlue.remove();
  btnRed.remove();
}, 10000); // Au bout de 10 secondes

btnRejouez.addEventListener("click", function () {
  location.reload();
});