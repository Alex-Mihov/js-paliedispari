// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// chiediamo all'user scegliere se pari o dispari e di inserire un numero da 1 a 5
const pariODispari = prompt("scegliere tra pari o dispari");
console.log("hai schelto:", pariODispari);

const numeroUser = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log("hai scelto il numero:", numeroUser);

// generiamo un numero random (sempre da 1 a 5) per il computer
function numeroRandomComputer() {
    return Math.floor(Math.random() * 5) + 1;
}
const numeroComputer = numeroRandomComputer();
console.log("il computer ha scelto il numero:", numeroComputer);

// facciamo la somma dei due numeri
let somma = numeroUser + numeroComputer;

console.log("la somma dei due numeri è:", somma);

// verifichiamo se il numero è paro o dispari 
function vincitore() {

    if (somma % 2 === 0) {
        return 'pari';
    } 
    else {
        return 'dispari';
    }

}
const numeroFinale = vincitore()
console.log("il numero è", numeroFinale)

// dichiariamo il vincitore 
if (pariODispari === numeroFinale && somma % 2 === 0) {
    console.log("hai vinto il numero è pari")
}
else if (pariODispari === numeroFinale && !somma % 2 === 0) {
    console.log("hai vinto il numero è dispari")
}
else {
    console.log("spiacente hai perso")
}
