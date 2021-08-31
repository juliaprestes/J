var pessoa = {
  nome: "Julia",
  idade: 21,
};

console.log(pessoa.nome);

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return lado * this.lados;
  },
};
// atualizacao do js para es6 nos trouxe
var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return lado * this.lados;
  },
};
