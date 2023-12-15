let Condiçao = 1
let NumeroHomens = 0
let NotaMulheres7 = 0
let MaiorNotaHomens = 0
let MediaGeral = 0

while (Condiçao <=10){

let SexoAluno = (prompt("Qual e o seu sexo / (Femi/Masc)"))
let NotaAluno = Number(prompt("Qual e a sua nota ?"))

if (SexoAluno === "Masc" ){
 {
  (NotaAluno > MaiorNotaHomens)
     MaiorNotaHomens = NotaAluno
 }
 NumeroHomens++;
}


    if(SexoAluno === "Femi" && NotaAluno >7)

     NotaMulheres7++;
     
    

    
Condiçao++;
MediaGeral += NotaAluno;
}
MediaGeral = MediaGeral / 10

console.log ("Esse e o numero de Homens " + NumeroHomens)
console.log ("Esse e o numero de Mulheres que tiraram acima de 7 " + NotaMulheres7)
console.log ("Essa foi a maior nota dos Homens " + MaiorNotaHomens)
console.log ("Essa e a media geral dos alunos" + MediaGeral )
