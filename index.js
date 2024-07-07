const contatos = document.querySelectorAll(".contato")
const chats = document.querySelectorAll(".chat")

contatos.forEach((contato, indice) => {
    contato.addEventListener('click', () => {
        desativarConversaSelecionada();
        selecionarConversa(contato) ;
        esconderConversaAtiva();
        mostrarConveraDeFundo(indice);
    });
});

function desativarConversaSelecionada() {
    const conversaSelecionada = document.querySelector('.conversa-selecionada');
    conversaSelecionada.classList.remove('conversa-selecionada');
}

function selecionarConversa(contato) {
    contato.classList.add('conversa-selecionada');
}

function esconderConversaAtiva() {
    const conversaAtiva = document.querySelector('.mostrar');
    conversaAtiva.classList.remove('mostrar');
}

function mostrarConveraDeFundo(indice) {
    chats[indice].classList.add('mostrar');
}

const inputs = document.getElementsByName("input")
const campoMensagem = document.getElementsByClassName("campo-mensagens")

function adicionarComentario(index) {
    let textoDigitado = inputs[index].value;
    let campoComMensagem = campoMensagem[index] 

    campoComMensagem.innerHTML += `<p>${textoDigitado}</p>`
}