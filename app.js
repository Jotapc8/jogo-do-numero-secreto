let listaDenumeroSorteados = [];
let numeroLimite = 10
function gerarNumeroAleatorio() {
    let numeroEscolhido = Math.round(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDenumeroSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDenumeroSorteados = [];
    }

    if(listaDenumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(); 
    } else {
        listaDenumeroSorteados.push(numeroEscolhido);
        console.log(listaDenumeroSorteados);
        return numeroEscolhido;
    }
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 
    {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', "Jogo do número secreto"); 
    exibirTextoNaTela('p', "Escolha um número de 1 a 10");    
}

exibirMensagemInicial();

let tentativas = 1

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'acertou! ');
        exibirTextoNaTela('p', `Você descobriu o número secreto na ${tentativas}ª tentativa.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é maior');
        } else {
            exibirTextoNaTela('p', 'O número secreto é menor');
        }
        tentativas++;
        limparCampo();
        
    }


}

let numeroSecreto = gerarNumeroAleatorio();

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}