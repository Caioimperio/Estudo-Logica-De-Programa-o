//Criar Um Sistema Que Pede Ao Usuario As Seguintes Informaçoes:Nome,Idade,Altura e Peso

//Pergunta:Nome 
let NomeUsuarioPergunta = prompt("Qual e o seu nome ?")

//Pergunta:Idade
let NumberIdadePergunta = Number(prompt("Quantos anos você tem ?"))

//Pergunta:Altura
let NumberAlturaPergunta = Number(prompt("Qual é a sua altura ?"))

//Pergunta:Peso
let NumberPesoPergunta = Number(prompt("Quantos é o seu peso ?"))  

//Calculando O Ano Que O Usuario Nasceu 
let NumberCalculoNascimento = 2023 - NumberIdadePergunta 

//Calculando O IMC Do Usuario 
let IMC = NumberPesoPergunta / (NumberAlturaPergunta * NumberAlturaPergunta)

//Informando Ao Usuario As Respotas Da Pergunta 
console.log ("Olá " + NomeUsuarioPergunta + "," + "vocé tem " + NumberIdadePergunta + " anos," + "nasceu em " + NumberCalculoNascimento + "," + "tem " + NumberAlturaPergunta + " de altura,pesa " + NumberPesoPergunta + "kg" + " seu IMC é " + IMC + "Kg/m2")