//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

//dichiaro la variabile somma all'esterno
let sum = 0
//per cinque volte chiedo all'utente un numero
for(let i = 0; i < 5; i++){
    userNumber = parseInt(prompt(`Scrivi un numero`));
    //sommo ogni numero inserito dall'utente e lo inserisco nella variabile sum
    sum += userNumber;
}
