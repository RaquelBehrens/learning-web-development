/*Definindo variáveis auxiliares */

const statusDisplay = document.querySelector('.status');
const sequenciaGanho = document.querySelector('.sequenciaGanho')

let jogoAtivo = true;
let listaJogadores = ['X', 'Y']
let jogadorAtual = listaJogadores[getRandomIntInclusive(0,1)];
let estadoDoJogo = ["", "", "", "", "", "", "", "", ""];

const mensagemGanhou = () => `Jogador ${jogadorAtual} ganhou!`;
const mensagemEmpatou = () => `Deu véia!`;
const vezJogadorAtual = () => `É a vez do ${jogadorAtual}.`;


/*Pedindo os nomes dos jogadores inicialmente e definindo suas pontuações iniciais*/

escolherNome(1)
escolherNome(2)

let pontuacao1 = 0
let pontuacao2 = 0
document.querySelector('.jogador1 .pontuacao').innerHTML = pontuacao1
document.querySelector('.jogador2 .pontuacao').innerHTML = pontuacao2

statusDisplay.innerHTML = vezJogadorAtual();


/*Funções que verificam os eventos da página*/

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', clicarCelula));
document.querySelector('.restart').addEventListener('click', recomecarJogo);


/*Funções*/

function escolherNome(jogador) {
    let nome = window.prompt(`Jogador ${jogador}, digite seu nome!`)

    if (nome) {
        document.querySelector(`.jogador${jogador} .nome`).innerHTML = nome
    } else {
        window.alert('Você deve digitar alguma coisa!')
        escolherNome(jogador)
    }   
}

function clicarCelula(celulaClicadaEvent) {
    const celulaClicada = celulaClicadaEvent.target;
    const celulaClicadaIndex = parseInt(celulaClicada.getAttribute('data-cell-index'));
  

    if (estadoDoJogo[celulaClicadaIndex] !== "" || !jogoAtivo) {
        return;
    }

    celulaClicada.style.color = 'DeepPink'

    jogada(celulaClicada, celulaClicadaIndex);
    validacaoResultado();
}

function jogada(celulaClicada, indiceCelulaClicada) {
    estadoDoJogo[indiceCelulaClicada] = jogadorAtual;
    celulaClicada.innerHTML = jogadorAtual;
}

function validacaoResultado() {
    const situacoesDeGanho = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let rodadaGanha = false;
    let x,y,z = ""

    for (let i = 0; i <= 7; i++) {
        const situacao = situacoesDeGanho[i]; 
        //let estadoDoJogo = ["X", "X", "X", "", "", "", "", "", ""];
        let a = estadoDoJogo[situacao[0]];
        let b = estadoDoJogo[situacao[1]];
        let c = estadoDoJogo[situacao[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }

        if (a === b && b === c) {
            rodadaGanha = true;
            x = situacao[0]
            y = situacao[1]
            z = situacao[2]
            break
        }
    }
    
    if (rodadaGanha) {
        jogoAtivo = false;

        if (jogadorAtual === 'X') {
            pontuacao1++
            document.querySelector('.jogador1 .pontuacao').innerHTML = pontuacao1
        } else {
            pontuacao2++
            document.querySelector('.jogador2 .pontuacao').innerHTML = pontuacao2
        }      

        statusDisplay.innerHTML = mensagemGanhou();
        sequenciaGanho.innerHTML = 'Sequência de marcações vencedoras: '+x+' '+y+' '+z;

        setTimeout(function() {
            mostrarAlerta(mensagemGanhou())
        }, 0)
        return;
    }

    let rodadaEmpatada = !estadoDoJogo.includes("");
    if (rodadaEmpatada) {
        jogoAtivo = false;
        statusDisplay.innerHTML = mensagemEmpatou();

        setTimeout(function() {
            mostrarAlerta(mensagemEmpatou())
        }, 0)
        return;
    }

    mudarJogador();
}

function mudarJogador() {
    jogadorAtual = jogadorAtual === "X" ? "O" : "X";
    statusDisplay.innerHTML = vezJogadorAtual();
}

function mostrarAlerta(mensagem) {
    var resposta = window.confirm(mensagem+" Vocês desejam reiniciar?");
    if (resposta) {
        recomecarJogo();
    }
}

function recomecarJogo() {
    jogoAtivo = true;
    jogadorAtual = listaJogadores[getRandomIntInclusive(0,1)];
    estadoDoJogo = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = vezJogadorAtual();
    sequenciaGanho.innerHTML = '';

    let cells = document.querySelectorAll('.cell')
    for(i=0;i<9;i++) {
        cells[i].style.color = 'silver'
        cells[i].innerHTML = `${i}`;
    } 
}

function mudarNome(jogador) {
    let nome = window.prompt(`Jogador ${jogador}, digite seu novo nome!`)

    if (nome) {
        document.querySelector(`.jogador${jogador} .nome`).innerHTML = nome
    } else {
        window.alert('Você deve digitar alguma coisa!')
    }   
}

function zerarPontuacao() {
    let zerar = window.confirm("Tem certeza que deseja zerar a pontuação?")

    if (zerar) {
        pontuacao1 = 0
        pontuacao2 = 0
        document.querySelector('.jogador1 .pontuacao').innerHTML = pontuacao1
        document.querySelector('.jogador2 .pontuacao').innerHTML = pontuacao2

        setTimeout(function() {
            window.alert('Pontuação zerada!')
        }, 0)
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }




