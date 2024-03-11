//Calcola la somma e la media dei primi 10 numeri.

//creo array con 10 numeri
let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arrayNum)
// somma numeri
let totalSum = 0
for(let i = 0; i < arrayNum.length; i++ ){
    //scorri i numeri nell'array e addizionali alla variabile totalSum
    totalSum += arrayNum[i]
}
console.log(totalSum);

//calcola la media dei numeri
console.log(arrayNum.length);
let averageNum = totalSum / arrayNum.length;
console.log(averageNum);