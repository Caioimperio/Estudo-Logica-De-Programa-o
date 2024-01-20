let Numeros = [];
let Contador = 0;
let NumerosInverso = [];
let ContadorReverso = 0
let PerguntaQuantidade = Number(prompt("Quantos Numeros vocé deseja inserir"))
let CalculoParaInversao = PerguntaQuantidade - 1
ContadorReverso = CalculoParaInversao



for (let PerguntaInfo = 0; PerguntaInfo < PerguntaQuantidade; PerguntaInfo++) {
    let Pergunta = Number(prompt("Escreva um número:"));
    Numeros[Contador] = Pergunta;
    Contador++;
}   
console.log("Numeros na array " + Numeros);



for (let Reverse = 0; Reverse < PerguntaQuantidade; Reverse++) {
    NumerosInverso[Reverse] = Numeros[ContadorReverso];
    ContadorReverso--;
}

console.log("Numeros na array inversa " + NumerosInverso);
