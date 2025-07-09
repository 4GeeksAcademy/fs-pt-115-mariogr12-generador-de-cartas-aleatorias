import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  let palos = ["♦", "♥", "♠", "♣"]
  let valores = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J"]
  let color = "negro"

  let header = document.getElementById("cardHeader")
  let body = document.getElementById("cardBody")
  let footer = document.getElementById("cardFooter")

  const establecerCartaRandom = () => {
    let randomPalo = palos[Math.floor(Math.random() * 4)]
    if (randomPalo === "♦" || randomPalo === "♥") color = "rojo"
    if (randomPalo === "♠" || randomPalo === "♣") color = "negro"

    if (color === "rojo") {
      document.getElementById("cardHeader").style.color = "red"
      document.getElementById("cardFooter").style.color = "red"
    }
    if (color === "negro") {
      document.getElementById("cardHeader").style.color = "black"
      document.getElementById("cardFooter").style.color = "black"
    }

    let randomValor = valores[Math.floor(Math.random() * 13)]

    header.textContent = randomPalo
    footer.innerText = randomPalo

    body.innerHTML = randomValor
  }

  establecerCartaRandom()
};
