function sortear () {
    let quantidade =parseInt(document.getElementById('quantidade').value);
let doNumero = parseInt(document.getElementById('de').value);
let ateNumero = parseInt(document.getElementById('ate').value);
if (doNumero >= ateNumero) {
    alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
    return;
  }

let sorteados = [];
let numero;
for (let i = 0; i < quantidade; i++) {
numero = obterNumeroAleatorio(doNumero, ateNumero);
while (sorteados.includes(numero));
sorteados.push(numero);
} 
let exibirSorteados = document.getElementById('resultado');
exibirSorteados.innerHTML = `<label class ="texto__paragrafo"> Números sorteados até agora: ${sorteados}</label>`;
alterarStatusBotao();
}  

function obterNumeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  
}
function alterarStatusBotao() {
    let alterar = document.getElementById('btn-reiniciar');
    if (alterar.classList.contains('container__botao-desabilitado')) {
        alterar.classList.remove('container__botao-desabilitado');
        alterar.classList.add('container__botao');
    } else {
alterar.classList.remove('container__botao');
alterar.classList.add('container__botao-desabilitado');
    }
}
function reiniciar() {

    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao();

}