//Pergunta alternativa de abastecimento ou so enche o pneu
let PerguntaPosto = prompt("Oi Oque vocé deseja ? abastecer com gasolina ou alcool ou so encher os pneus ? ")

switch (PerguntaPosto){
    case "gasolina":
        let PerguntaPreçoAbastecerGasolina = Number(prompt("Quanto que vocé deseja abaster ? a gasolina esta a R$5 Reais"))
        console.log ("Vocé abasteceu " + ( PerguntaPreçoAbastecerGasolina / 5) + " de gasolina")
        break

   case "alcool":
        let PerguntaPreçoAbastecerAlcool = Number(prompt("Quanto que vocé deseja abaster ? o alcool esta a R$3 Reais"))
        console.log ("Vocé abasteceu " + ( PerguntaPreçoAbastecerAlcool / 3) + " reais de alcool")
        break

    case "encher pneus":
    console.log ("Ok pneus calibrados")
        break
}