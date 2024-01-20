let Numeros = [];
let Contador = 0;
let NumerosInverso = [];
let ContadorReverso = 4;

for (let PerguntaInfo = 0; PerguntaInfo < 5; PerguntaInfo++) {
    let Pergunta = Number(prompt("Escreva um número:"));
    Numeros[Contador] = Pergunta;
    Contador++;
}   
console.log("Numeros na array " + Numeros);

for (let Reverse = 0; Reverse < 5; Reverse++) {
    NumerosInverso[Reverse] = Numeros[ContadorReverso];
    ContadorReverso--;
}

console.log("Numeros na array inversa " + NumerosInverso);

