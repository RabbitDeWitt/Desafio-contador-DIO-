var botaoMais = document.getElementById("mais")
var botaoMenos = document.getElementById("menos")
var numeroAtualElement = document.getElementById("numero")
var numeroAtual = 0


function aumentar(){
    //Limite de encremento
    if(numeroAtual < 10){
        numeroAtual = numeroAtual + 1
        numeroAtualElement.innerHTML = numeroAtual   
    }
    //Mudança de cor
    if(numeroAtual < 0){
        numeroAtualElement.style.color = "red"
    }else{        
        numeroAtualElement.style.color = "white"
    }
}
    
function diminuir(){
    //Limite de decremento
    if(numeroAtual >= -10){
        numeroAtual = numeroAtual - 1
        numeroAtualElement.innerHTML = numeroAtual   
    }
    //Mudança de cor
    if (numeroAtual < 0){
        numeroAtualElement.style.color = "red"
    }else{   
        numeroAtualElement.style.color = "white"
    }    
}


botaoMais.addEventListener("click", aumentar)
botaoMenos.addEventListener("click", diminuir)
