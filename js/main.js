let tasto= document.getElementById("genera");

  tasto.addEventListener("click", 
   function(){
    let nomeCognome=document.getElementById("inputNomeCognome").value;
    let chilometri=document.getElementById("inputKm").value;
    let eta=document.getElementById("inputEta").value;
    let prezzo= 0.21 * chilometri;
    console.log(prezzo);
    let prezzoTot;
    let rounded;
    if (eta < 18) {
        prezzoTot= prezzo-((prezzo / 100) * 20);
        rounded = prezzoTot.toFixed(2);
        console.log(prezzoTot);
    }
    else if (eta > 65){
        prezzoTot= prezzo-((prezzo / 100) * 40);
        rounded = prezzoTot.toFixed(2);
        console.log(prezzoTot);
    } 
    else{
        prezzoTot= prezzo;
        rounded = prezzoTot.toFixed(2);
        console.log(prezzoTot);
    }

    
    let blocco= document.querySelector(".generatore2.mostra");
    blocco.style.display="block";
    let nomeBiglietto=document.getElementById("nomeBiglietto").innerHTML=`${nomeCognome}`
    let prezzoBiglietto=document.getElementById("prezzoBiglietto").innerHTML=`${prezzoTot}\u20AC `

  }
 );
