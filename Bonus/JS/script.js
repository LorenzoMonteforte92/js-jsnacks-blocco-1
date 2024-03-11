// Dato un array contenente 10 numeri, stampare in console il numero più grande.
//genero numeri random per array
// let arrayNum = []
// for(let i = 0; i < 10; i++){
//     randomNum = Math.floor(Math.random() * 100) + 1;
//     console.log(randomNum);
//     arrayNum.push(randomNum);

// }
// console.log(arrayNum);

//scrivo array
num = [60, 75, 1, 91, 52, 34, 89, 28, 24, 49]

//dichiaro variabile largest
let largest = num[0];
//scorrere tutto l'array
for(let i = 0; i < num.length; i++){
     //se un elemento dell'array è più grande dell'elemento 0 selezionato nella variabile largest, allora riassegnalo a quest'ultima variabile
    if (num[i] > largest) {
        largest = num[i];
    }
}

console.log(largest)



