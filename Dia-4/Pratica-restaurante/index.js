//Perguntando ao usuario se ele tem fome e sem tem dinheiro e se o restaurante esta aberto
let dinheirio = prompt("Vocé tem dinheiro ? (sim/nao)")
let fome = prompt("Vocé esta com fome ? (sim/nao)")
let restaurante = prompt("O restaurante esta aberto ? (sim/nao) ")

if( dinheirio === "nao" || fome === "nao"){
    console.log("Hoje a janta será em casa") 

}else if( dinheirio === "sim" && fome === "sim" && restaurante === "nao" ){
    console.log ("Peça um delivery")

}else if( dinheirio === "sim" && fome === "sim" && restaurante === "sim")
    console.log ("Hoje o jantar sera no seu restaurante preferido")