const etaUtente = parseInt (prompt("Quanti anni hai?"));
const kmUtente = parseInt (prompt("Quanti km farai?"));

/* let outputlog =""; */
let product = (0.21 * kmUtente) .toPrecision(2);
console.log (product); 
let prezzoFinale = (product * 20 / 100);
console.log (prezzoFinale); 
let prezzoFinale2 = product - (product * 40 / 100) ;
console.log (prezzoFinale2); 

if( etaUtente < 18){
    
    prezzoFinale = (product * 20 / 100) ;
    document.getElementById('km').innerHTML = prezzoFinale;

} else if (etaUtente >= 18 && etaUtente <= 65) { 

    product = (0.21 * kmUtente) .toPrecision(2);
    document.getElementById('output').innerHTML = product;
    
} else if( etaUtente >65){

    prezzoFinale2 = product - (product * 40 / 100) ;
    
    document.getElementById('km-over').innerHTML = prezzoFinale2;
}





