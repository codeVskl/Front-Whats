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
const iconMicrofone = document.querySelectorAll(".fa-microphone")
const botaoEnviarMensagem = document.querySelectorAll(".submit")
const campoMensagem = document.getElementsByClassName("campo-mensagens")

botaoEnviarMensagem.forEach((botao, indice) => {
    document.addEventListener("keypress", function(e) {
        if(e.key === "Enter") {
            botao.click();
        }
    })

    botao.addEventListener("click", () => {
        if(inputs[indice].value !== ''){
            adicionarComentario(indice)
            removerPaperPlane(indice)
            inputs[indice].value = ''
        }else{
            return
        }
    })
})


function adicionarComentario(indice) {
    let textoDigitado = inputs[indice].value;
    let campoComMensagem = campoMensagem[indice] 
    let horaTextoDigitado = "<span>13:30</span>"

    campoComMensagem.innerHTML += `<p>${textoDigitado} ${horaTextoDigitado}</p>`
}

inputs.forEach((input, indice) => {
    input.addEventListener('keyup', () => {
        if(input.value === "") {
            removerPaperPlane(indice)
        }else {
            adicionarPaperPlane(indice)
        }
    })
})

function adicionarPaperPlane(indice) {
    iconMicrofone[indice].classList.remove("fa-microphone")
    iconMicrofone[indice].classList.add("fa-paper-plane")
}

function removerPaperPlane(indice) {
    iconMicrofone[indice].classList.remove("fa-paper-plane")
    iconMicrofone[indice].classList.add("fa-microphone")
}