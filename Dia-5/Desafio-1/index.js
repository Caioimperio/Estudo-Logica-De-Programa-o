//Pegando Informaçoes Do Usuario (Numeros)
let primeironumero = Number(prompt("Me informe um numero ?"))
let segundonumero = Number(prompt("Me informe um segundo numero ?"))

//Criando pergunta para usuario escolher operaçao matematica
let PerguntaOperaçaoCalculadora = prompt("Qual operaçao vocé quer usar ? (Adiçao,Subtraçao,Multiplicaçao,Divisao,Modulo)")
switch (PerguntaOperaçaoCalculadora){
    
    case "Adiçao":
          console.log (primeironumero + "+" + segundonumero + "=" + (primeironumero + segundonumero))
        break

    case "Subtraçao":
            console.log (primeironumero + "-" + segundonumero + "=" + (primeironumero - segundonumero))
          break

    case "Multiplicaçao":
          console.log (primeironumero + "*" + segundonumero + "=" + (primeironumero * segundonumero))
        break

    case "Divisao":
          console.log (primeironumero + "/" + segundonumero + "=" + (primeironumero / segundonumero))
        break

    case "Modulo":
            console.log (primeironumero + "%" + segundonumero + "=" + (primeironumero % segundonumero))
          break
}