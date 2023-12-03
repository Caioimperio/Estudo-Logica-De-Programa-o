//Perguntas Ao Usuario Para Pegar Informçoes 
let numberidadePergunta = Number(prompt("Quantos anos vocé tem ?"))
let nomePergunta = prompt("Qual e o seu nome ?")
let CarteiraMotoristaPergunta = prompt("Vocé tem carteira de motorista ? (sim/nao)")
let CarroPergunta = prompt("Vocé tem carro ? (sim/nao)")


//Respondendo O Usuario
if( numberidadePergunta >= 18  && CarroPergunta === "sim" && CarteiraMotoristaPergunta === "sim"){
    console.log(nomePergunta + ",Vocé será motorista!")

}else if(numberidadePergunta >= 18  && CarroPergunta === "nao" ){
    console.log (nomePergunta + ",Vocé pode dirigir mais nao tem carro")

}else console.log(nomePergunta + ",Vocé nao pode dirigir")
 

