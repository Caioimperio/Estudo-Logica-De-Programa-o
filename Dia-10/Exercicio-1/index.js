let Numeros = []
let Contador = 0

for(let Pergunta = 0;Pergunta < 10;Pergunta++){
    let PegandoInformaçoes = Number(prompt("Escreva um numero"))
    Numeros[Contador] = PegandoInformaçoes
    Contador++;
}
console.log(Numeros)