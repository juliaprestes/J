// verifique se sua idade é maior ou maior que a de algum parente
var minhaIdade = 21;
var idadeJose = 19;
if (minhaIdade > idadeJose) {
  console.log("Maior");
} else if (minhaIdade == idadeJose) {
  console.log("É igual");
} else {
  console.log("Menor");
}

// Qual valor é retornado na expressão seguinte
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao);
//verifique se as seguintes variaveis sao true or false

var nome = "Julia";
var idade = "21";
var possuiGraduacao = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(
  !!nome,
  !!idade,
  !!possuiGraduacao,
  !!empregoFuturo,
  !!dinheiroNaConta
);

//compare o total de habitantes do Brasil com a China ( valor em milhoes)

var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("Brasil tem mais habitantes");
} else {
  console.log("China tem mais habitantes");
}

//o que aparecerá no console?

if ("Gato" === "gato" && 5 > 2) {
  console.log("verdadeiro");
} else {
  console.log("Falso");
}

if ("Gato" === "gato" || 5 > 2) {
  console.log("gato" && "cão");
} else {
  console.log("Falso");
}
