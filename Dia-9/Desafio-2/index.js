let Condinçao = true

while(Condinçao === true){
//Pegando Informaçoes
let nome = String(prompt("Por favor Insira seu nome:"))
let idade = Number(prompt("Por gentileza insira sua idade:"))
let SalarioAtual = Number(prompt("Por favor insira seu salario atual:"))



//Confirmando informaçoes
let ComfirmarInformaçoes = Number(prompt("As Informaçoes estao corretas ? se sim digite 1 se nao digite 2"))

if(ComfirmarInformaçoes === 1){
    Condinçao = false
    alert("Nos reinforme os dados por favor !!!")
}



//Previsao do salario para os proximos 10 anos (com aumento salarial anual)
let AumentoSalario = 0.015 
let SalarioComAumento = SalarioAtual

for(let AnoAtual = 2023;AnoAtual <= 2033;AnoAtual++){
    let teste = SalarioComAumento * AumentoSalario
    let teste2 = SalarioComAumento + teste
    SalarioComAumento = teste2
    console.log(AnoAtual + "-Vocé tera um aumento de: " + SalarioComAumento  )
    AumentoSalario *= 2
    
}
}