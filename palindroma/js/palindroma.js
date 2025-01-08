// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// chiediamo all'utente la parola 
let parola = prompt("inserisci una parola");

// FUNZIONE per verificare se la parola è plindroma

function parolaPalindroma(parola) {
    // converto la parola in minuscolo
    let parolaMinuscolo = parola.toLowerCase();

    // inverto parola dell'user
    let parolaInvertita = parolaMinuscolo.split("").reverse("").join("");

    // stampo la parola in console
    return parolaMinuscolo === parolaInvertita
}

// verifischiamo se la parola è palindroma 
// SE la parola è palindroma 
if (parolaPalindroma(parola)) {
    // allora output (la parola è palindroma)
    console.log(`La parola che ha inserito:"${parola}" è palindroma!`)
}// ALTRIMENTI la parola non è plindroma 
else {
    console.log(`La parola che ha inserito:"${parola}" non è palindroma!`)
}


