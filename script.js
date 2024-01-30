// esercizio 1
// function numeriInteri(a, b) {
//     if (a===50 || b===50 || a+b===50) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(numeriInteri(25+25))


// esercizo 2
// function rimuoviCarattere(a, b) {
//     b= a.slice(0,-1);
//     return b;
// }
// console.log(rimuoviCarattere("Epicode"));


// esercizio 3
// function numeriCompresi (a) {
//     if (a >= 40 && a <= 60 || a >= 70 && a <= 100) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(numeriCompresi(101));


// esercizio 4
// function nomeCittà(a) {
//     if (a.includes("Los") || a.includes("New")) {
//         return a;
//     } else {
//         return false;
//     }
// }
// console.log(nomeCittà(""));


// Esercizio 5
// function sommaArray () {
//     let array = [2,4,8,"fine"]
//     let sum = array.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
//     );

//     return sum;
// }
// console.log(sommaArray());


// Esercizio 6
// function numContain () {
//     let array = [1,4,5,0];
//     if (array.includes(1) || array.includes(3)) {
//         return false;
//     } else {
//         return true;
//     }
// }
// console.log(numContain());


// Esercizio 7
// function angoli(a) {
//     if(a < 90) {
//         return "acuto"
//     } else if(a > 90 && a < 180) {
//         return "ottuso"
//     } else if(a === 90) {
//         return "retto"
//     } else if(a === 180) {
//         return "piatto"
//     }
// }
// console.log(angoli(180));


// Esercizio 8
// function acronimo() {
//     let frase = "Fabbrica Italiana Automobili Torino"
//     let parola = frase.split(' ');
//     for (const parole of parola) {
//         console.log(parole.slice(0,1))
//     }
// }
// console.log(acronimo())