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
function numeroComputerRandom() {
    return Math.floor(Math.random() * 5) + 1;
}
const numeroComputer = numeroComputerRandom();
console.log("il computer ha scelto il numero:", numeroComputer);

// facciamo la somma dei due numeri
let somma = numeroUser + numeroComputer;

console.log("la somma dei due numeri è:", somma);

// verifichiamo se il numero è paro o dispari 

// dichiariamo il vincitore 