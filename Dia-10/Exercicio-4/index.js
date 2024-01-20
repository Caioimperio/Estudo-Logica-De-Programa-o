//Criando variaveis
let Pergunta = Number(prompt("Oi por favor digite um numero !!!"))
Fibonacci = []
Fibonacci [0] = Pergunta -1
Fibonacci [1] = Pergunta


//Criando o loop
for(let i = 2; i < 10;i++){

    Fibonacci [i] = Fibonacci [i - 1] +Fibonacci [i - 2]
}

console.log(Fibonacci)

if(Pergunta < 0){
    alert("Nao e permitido numeros negativos e meios so possitvios e inteiros")
}



//(no for nao que dizer pra dimnuir e sim para a ordem no aarry que o i -1 e pra pegar o 1 nuemro e o i -2 ep ra pegar o segund onuemro da lista e se vc fizer as contas eles esntao sempre somando o for so e uma estrutura de repeticao para calcular  e o i e usado para sabar a ordem da arry de que lugar para pegar no começo 
//e o fibonmaci 0 e 1 que agente definiu o começo da arry e no caso todo nuemro que agente coloca vai diminuir 1 e dps vai somar o 0 com o 1 da arry que por exempl ose agente responder 5 vai fica 4 + 5 = 9 aii dps 4 +9=13 ai dps 8+13 = 21 ai dps = 12+21=33 ai dps 20+33=53 a assim por diante )