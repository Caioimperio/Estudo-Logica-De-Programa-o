//Solicitaçao do nome o cpf

let Contador = true
let SaldoGeral = 100
let Controlador = 1
let MaiorValorInserido = 0

while(Contador === true){

let PerguntaCpf = Number(prompt("Insira seu Cpf ! (Somente Numeros)"))
let PerguntaNome = prompt("Qual e o seu nome ?")
let PerguntaSaqueOuDeposito = prompt("Vocé deseja fazer saque ou deposito ?")
let PerguntaValor = Number(prompt("insira um valor ! (Somente Numeros)"))
let PerguntaPOuC = (prompt("Deseja parar ou continuar (P/C)"))
let Media = PerguntaValor / Controlador


if(PerguntaSaqueOuDeposito === "saque"){
   
    SaldoGeral -= PerguntaValor
}
if (PerguntaValor > SaldoGeral ) {
    alert("Você não pode sacar mais do que o saldo disponível .");
}
    
    
if (PerguntaValor < 0){
    alert("Por favor, insira um número positivo, numeros negativos nao sao permitidos!")
    Contador = false

}
   

if(PerguntaSaqueOuDeposito === "deposito"){

    SaldoGeral += PerguntaValor
}

if(PerguntaPOuC === "P"){

    Contador = false

}
if(PerguntaValor > MaiorValorInserido){
    PerguntaValor -= MaiorValorInserido

}
Controlador++;

console.log ("Esse e o saldo geral " + SaldoGeral )
console.log ("O maior valor inserido foi " + MaiorValorInserido )
console.log ("A media geral e " + Media )

}
