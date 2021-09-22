"use scrict"

const semaforo = document.getElementById("semaforo")
const auto = document.getElementById("automatico")
let idInterval

function ligarVermelho(){
    semaforo.src = "assets/img/vermelho.png"
    parar()
    auto.textContent = "Automatico"
}

 function ligarAmarelo(){
    semaforo.src = "assets/img/amarelo.png" 
    parar()
    auto.textContent = "Automatico" 
}

function ligarVerde(){
    semaforo.src = "assets/img/verde.png"
    parar()
    auto.textContent = "Automatico"
}

function trocarCor(){
    if(semaforo.src.includes("amarelo")){
        semaforo.src =  "assets/img/vermelho.png"
    }
    else if(semaforo.src.includes("verde")){
        semaforo.src =  "assets/img/amarelo.png"
    }
    else if(semaforo.src.includes("desligado")){
        semaforo.src =  "assets/img/verde.png"
    }
    else{
        semaforo.src =  "assets/img/verde.png"
    }
}

function ligarAutomatico(){
    if(auto.textContent == "Automatico"){
        idInterval = setInterval(trocarCor, 1000)
        auto.textContent = "parar"
    }
    else{
        parar()
        semaforo.src = "assets/img/desligado.png"
        auto.textContent = "Automatico"
    }
}

function parar(){
    clearInterval(idInterval)
}

document.getElementById("vermelho").addEventListener("click", ligarVermelho)
document.getElementById("amarelo").addEventListener("click", ligarAmarelo)
document.getElementById("verde").addEventListener("click", ligarVerde)
document.getElementById("automatico").addEventListener("click", ligarAutomatico)