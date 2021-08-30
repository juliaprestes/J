// crie uma função para verificar se um valor é truth
function isTruthy(valor) {
  return !!dado;
}
// crie uma função matematica que retorna o perimetro de um quadrado (soma dos lados)
function perimetroQuadrado(lado) {
  return lado * 4;
}
// crie uma funcao que retorne o nome completo
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
//crie uma funcao que verifica se um numero é par
function verificaPar(numero) {
  var resto = numero % 2;
  if (modulo === 0) {
    return true;
  } else {
    return false;
  }
}
//crie uma funcao que retorne o tipo do argumento ( typeof )

function tipoDeDado(dado) {
  return typeof dado;
}
//addEventListener é uma funcao nativa do js
// o primeiro parametro é o evento que ocorre e o segundo o callback
//utilizar essa funcao para trazer o nome completo
// quando o evento scroll ocorrer
addEventListener("scroll", function () {
  console.log("Julia Prestes");
});

//corrija o erro abaixo
var totalPaises = 193; // variavel global

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
