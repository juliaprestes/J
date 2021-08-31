//crie um objeto de um cachorro que represente um labrador preto com 10 anos que late ao ver um homem

var cachorro = {
  raca: labrador,
  cor: preto,
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return "latir";
    } else {
      return "nada";
    }
  },
};
