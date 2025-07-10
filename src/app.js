import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  let palos = ["♦", "♥", "♠", "♣"]
  let valores = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J"]
  let color = "black"

  let header = document.getElementById("cardHeader")
  let body = document.getElementById("cardBody")
  let footer = document.getElementById("cardFooter")

  let carta = document.querySelector("#carta")

  let alto = document.getElementById("alto")
  let ancho = document.getElementById("ancho")

  let avisos = document.getElementById("avisos")

  alto.addEventListener("change", (e) => {
    if (e.target.value >= 315){
      avisos.classList.remove("alert-danger")
      avisos.classList.add("bg-white")
      avisos.innerHTML= "Puedes cambiar el alto y el ancho de la carta"
      carta.style.height = e.target.value + "px"
    } else {
      avisos.classList.remove("bg-white")
      avisos.classList.add("alert-danger")
      avisos.innerHTML = "El alto minimo debe ser de 315!!"
    }
  })

  ancho.addEventListener("change", (e) => {
    if (e.target.value >= 210){
      avisos.classList.remove("alert-danger")
      avisos.classList.add("bg-white")
      avisos.innerHTML= "Puedes cambiar el alto y el ancho de la carta"

      carta.style.width = e.target.value + "px"
    } else {
      avisos.classList.remove("bg-white")
      avisos.classList.add("alert-danger")
      avisos.innerHTML= "El ancho mínimo debe ser de 210!!"
    }
  })


  const establecerCartaRandom = () => {
    let randomPalo = palos[Math.floor(Math.random() * 4)]
    if (randomPalo === "♦" || randomPalo === "♥") color = "red"
    if (randomPalo === "♠" || randomPalo === "♣") color = "black"

    if (color === "red") {
      document.getElementById("cardHeader").style.color = color
      document.getElementById("cardFooter").style.color = color
    }
    if (color === "black") {
      document.getElementById("cardHeader").style.color = color
      document.getElementById("cardFooter").style.color = color
    }

    let randomValor = valores[Math.floor(Math.random() * 13)]

    header.textContent = randomPalo
    footer.innerText = randomPalo

    body.innerHTML = randomValor
  }

  establecerCartaRandom()

  setInterval(establecerCartaRandom, 10000)

  let buttonRandom = document.getElementById("buttonRandom")

  buttonRandom.addEventListener("click", () => {
    buttonRandom.style.boxShadow = "0 0 0 .25rem rgba(248, 249, 250, .5)";

    establecerCartaRandom()

    setTimeout(() => {
      buttonRandom.style.boxShadow = 'none';
    }, 150);
  })
};
