const etaUtente = parseInt (prompt("Quanti anni hai?"));
const kmUtente = parseInt (prompt("Quanti km farai?"));

/* let outputlog =""; */
/* let product = (0.21 * kmUtente).toPrecision(2);
console.log (product); 
let prezzoFinale = (product * 20 / 100);
console.log (prezzoFinale); 
let prezzoFinale2 = product - (product * 40 / 100) ;
console.log (prezzoFinale2);  */

if( etaUtente < 18){
    
    prezzoFinale = product- (product * 20 / 100).toPrecision(2) ;
    let km = document.getElementById('km')
    km.innerHTML = 'il prezzo del bigietto è ' + `${prezzoFinale}`;

} else if (etaUtente >= 18 && etaUtente <= 65) { 

    product = (0.21 * kmUtente).toPrecision(2);
    let output = document.getElementById('km')
    output.innerHTML = 'il prezzo del bigietto è ' + `${product}`;

} else if( etaUtente >65){

    prezzoFinale2 = product - (product * 40 / 100).toPrecision(2) ;
    
    let kmOver = document.getElementById('kmOver')
    kmOver.innerHTML = 'il prezzo del biglietto è ' + `${prezzoFinale2}`
}





