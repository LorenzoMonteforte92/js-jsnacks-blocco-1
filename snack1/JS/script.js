// - Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati (inserire il numero nell'array solo se non è già presente)

//dichiarare array vuoto
let userNum = []
//chiedere 5 numeri
for(let i = 0; i < 5; i++){
    selectedNum = parseInt(prompt(`Scegli un numero`))
    
    //pushare il numero nell'array solo se non è ripetuto
    if(!userNum.includes(selectedNum)){
        userNum.push(selectedNum)
    }
};

console.log(userNum);