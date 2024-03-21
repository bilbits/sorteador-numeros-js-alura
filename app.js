function sortear() {
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let doNumero = parseInt(document.getElementById('de').value);
  let ateNumero = parseInt(document.getElementById('ate').value);

  // Validação de entrada
  if (doNumero >= ateNumero) {
    alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
    return;
  }
  if (quantidade > (ateNumero - doNumero + 1)) {
    alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
    return;
  }

  // Gerando números sorteados
  let sorteados = [];
  let numero;
  for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(doNumero, ateNumero);
    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(doNumero, ateNumero);
    }
    sorteados.push(numero);
  }

  // Exibindo resultados
  let exibirSorteados = document.getElementById('resultado');
  exibirSorteados.innerHTML = `<label class="texto__paragrafo">Números sorteados até agora: ${sorteados}</label>`;

  // Alterando status dos botões
  alterarStatusBotao(true);
}

function obterNumeroAleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(sorteados) {
  let botaoReiniciar = document.getElementById('btn-reiniciar');
  let botaoSortear = document.getElementById('btn-sortear');

  if (sorteados.length > 0) {
    botaoReiniciar.disabled = false;
    botaoSortear.disabled = true;
    botaoReiniciar.classList.remove('container__botao-desabilitado');
    botaoReiniciar.classList.add('container__botao');
    botaoSortear.classList.remove('container__botao');
    botaoSortear.classList.add('container__botao-desabilitado');
  } else {
    botaoReiniciar.disabled = true;
    botaoSortear.disabled = false;
  }
}

function reiniciar() {
  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';
  document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
  alterarStatusBotao(false);
}
