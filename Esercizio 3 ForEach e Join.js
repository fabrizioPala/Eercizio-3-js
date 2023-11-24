
/* Utilizza il metodo forEach che prende un array di nomi di frutta e li stampa aggiungendo un punto esclamativo a ciascun nome di frutta.
*/
const fruits = ["Mela", "Banana", "Kiwi", "Fragola"];
let arrRes = [];

fruits.forEach(fruit => {
  arrRes.push(fruit + "!");
});

const risultato = arrRes.join("");
console.log(risultato);

