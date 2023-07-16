// passo 1 - pegar no Js o elemento Html correspondente ao botão de trocar de tema 
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// passo 2 - dar um jeito de pegar no Html correspondente ao body 
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

// passo 3 - dar um jeito de indentificar o clique do usúario no botão de trocar de tema
botaoAlterarTema.addEventListener("click",() => {
    // passo 6 - remover a classe do modo-escuro do body
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro");

    if
    (modoEscuroEstaAtivo){
        // passo 8 - trocar imagem do botão alterar tema pra castelo
        imagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/CASTELO01.jpg");
    }else{
        // passo 5 - trocar a imagem do botão de alterar tema pra carroagem
        imagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/carroagempa.jpg");
    }

    


})