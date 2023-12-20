let Codigo = true

while(Codigo === true){
    
let Idade = Number(prompt("Qual e a sua idade ?"))
let Nome = String(prompt("Qual e o seu nome ?"))
let Peso = Number(prompt("Qual e o seu peso ? ?"))
let Altura = Number(prompt("Qual e a sua altura ?"))
let Profissao = String(prompt("Qual e a sua profissão ?"))
let PerguntaContinua = prompt("Voce deseja Inserir novos cogido ou finalizar ? (Inserir novos/Finalizar")   

console.log("O usuario Inseriu--->" +  "idade:" + Idade + " Nome:" + Nome + " Peso:" + Peso + " Altura:" + Altura + " profissão:" + Profissao + "  ola " + Nome + ",voce tem " + Idade + " anos, e " + Profissao + ", tem " + Altura + "M de altura e pesa " + Peso + "Kg.")

if(Idade >= 18){
    console.log ("Está liberado para tomar umas geladas")
}
if(Idade < 18){
    console.log ("Sem gelada para você")
}

let Meses = Idade * 12
let Semanas = Idade * 52
let Dias = Idade * 365

console.log ("Idade em meses: " + Meses + " Idade em semanas: " + Semanas + " Idade em dias: " + Dias)

let CalculoParaImc = ( Altura * Altura)
let IMC = Peso / CalculoParaImc

if(IMC < 18.5){
    console.log ("Magreza")
}
if(IMC >= 18.5 && IMC <= 24.9){
    console.log ("Normal")
}
if(IMC >= 24.9 && IMC <= 30){
    console.log ("Sobrepeso")
}
if(IMC > 30){
    console.log ("Obesidade")
}

let nascença = 2023 - Idade

console.log("Voce nasceu no ano de: " + nascença)

let AnoAtual = 2023
let AnosVivos = nascença
let idadeAtual = 0

for(let AnosVivos = nascença; AnosVivos <= 2023; AnosVivos++ ){
    console.log(AnosVivos + " - " + idadeAtual + " Anos de idade")
    idadeAtual++
}
if(PerguntaContinua === "Finalizar"){
    Codigo = false
}
    
}
