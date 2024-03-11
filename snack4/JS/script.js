//Calcola la somma e la media dei primi 10 numeri.

//creo array con 10 numeri
num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(num)
// somma numeri
totalSum = 0
for(let i = 0; i < num.length; i++ ){
    //scorri i numeri nell'array e addizionali alla variabile totalSum
    totalSum += num[i]
}

console.log(totalSum);