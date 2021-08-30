function areaQuadrada(lado) {
  return lado * lado;
}
console.log(areaQuadrada(2));

function pi() {
  return 3.14;
}

var total = 5 * pi(); //15.7

console.log(pi());

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

imc(63, 1.61);
console.log(imc(82, 1.74));

function corFavorita(cor) {
  if (cor === "azul") {
    return "gosto do céu";
  } else if (cor === "verde") {
    return "a grama é bonita";
  } else {
    return "não gosto de cores";
  }
}

addEventListener("click", function () {
  console.log("to clicando");
});

function terceiraIdade(idade) {
  if (idade >= 60) {
    console.log("Idoso");
  } else {
    return false;
  }
}

terceiraIdade(60);

var profissao = "Desenvolvedora";

function dados() {
  var nome = "Julia";
  var idade = 21;
  function outrosDados() {
    var endereco = "Joacaba";
    var idade = 21;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());
