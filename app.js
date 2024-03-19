function sortear () {
    let quantidade =parseInt(document.getElementById('quantidade').value);
let doNumero = parseInt(document.getElementById('de').value);
let ateNumero = parseInt(document.getElementById('ate').value);

}  

function obterNumeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  
}