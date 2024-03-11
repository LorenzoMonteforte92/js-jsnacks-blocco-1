//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero, 
//se è dispari inseriscilo nell’array.

//array vuoto
numGroup = []

//chiedere numeri a utente
for(let i = 0; i < 6; i++){
    let userNum = parseInt(prompt(`Scegli un numero`))
    console.log(userNum);
    //vedere se il numero è pari e pusharlo o meno
    if(userNum % 2 === 0){
        numGroup.push(userNum);
    }
}

console.log(numGroup);