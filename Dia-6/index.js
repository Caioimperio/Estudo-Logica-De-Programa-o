//Exercicio 1
let PerguntaNumeroEx1 = Number(prompt("Qual numero vocé deseja ?"))

for (let Calculo1 = 0; Calculo1 <=PerguntaNumeroEx1; Calculo1++){
    console.log("Exercicio 1=" + Calculo1)

}

//Exercicio 2
for (let Calculo2 = 0; Calculo2 <=50; Calculo2+=5 ){
    console.log("Exercicio 2=" + Calculo2)

}
//Exercicio 3
for (let Calculo3 = 50; Calculo3 >=0; Calculo3-=5 ){
    console.log("Exercicio 3=" + Calculo3)

}
//Exercicio 4
let PerguntaNumeroEx2 = Number(prompt("Qual tabuada vocé deseja ?"))
let PerguntaNumeroEx3 = Number(prompt("Ate que numero vocé quer a tabuada ?"))
for (let Calculo4 = 1; Calculo4 <=PerguntaNumeroEx3; Calculo4++){
    console.log("Exercicio 4="  + PerguntaNumeroEx2*Calculo4)

}
