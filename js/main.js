const etaUtente = parseInt (prompt("Quanti anni hai?"));
const kmUtente = parseInt (prompt("Quanti km farai?"));

let outputlog ="";
let product = (0.21 * kmUtente) .toPrecision(4);
console.log (product); 
let prezzoFinale = product - (product * 40 / 100);
console.log (prezzoFinale); 
let prezzoFinale2 = product - (product * 20 / 100);
console.log (prezzoFinale2); 

if( etaUtente < 18){
    
    outputlog="il prezzo sarà scontato del 20%";

} else if (etaUtente >= 18 && etaUtente <= 65) { 

    outputlog = "il prezzo del biglietto sarà pieno"

} else if( etaUtente >65){

    outputlog ="il prezzo del biglietto sarà sacontato del 40%"

}


document.getElementById('output').innerHTML = outputlog;
