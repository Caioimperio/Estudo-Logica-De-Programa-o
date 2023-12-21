let codigo = true

while(codigo === true){
let Salario = Number(prompt("Qual e o seu salario ?"))
let Idade = Number(prompt("Quantos anos voce tem ?"))
let Nome = String(prompt("Qual e o seu nome ?"))
let Corretamente = prompt("Voce digitou as informaçoes coretamente ? (Sim/Nao)")

console.log ("Seu nome e " + Nome + " tem " + Idade + " anos de idade e recebe um salario de R$" + Salario)


let DezAnosPrevisao = 2024
let Aumento = 0.015

for(let CalculoDezAnos = DezAnosPrevisao; CalculoDezAnos <= 2033; CalculoDezAnos++ ){
    
    Salario += Salario * Aumento
    DezAnosPrevisao++;
    Aumento *= 2
    console.log(CalculoDezAnos + "-" + Salario)
}



if(Corretamente === "Sim"){
    codigo = false
}
if(Corretamente === "Nao"){
    alert("Por favor coloque todas as informacoes novamente !!!")
}
}

