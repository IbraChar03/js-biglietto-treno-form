let tasto= document.getElementById("genera");
let tastoAnnulla= document.getElementById("annulla");

  tasto.addEventListener("click", 
   function(){
    let nomeCognome=document.getElementById("inputNomeCognome").value;
    let chilometri=document.getElementById("inputKm").value;
    let eta=document.getElementById("select-eta").value;
    let carrozza=Math.floor(Math.random() *10)+1;
    let codiceCP=Math.floor(Math.random() *100000)+10000;
    let prezzo= 0.21 * chilometri;
    console.log(prezzo);
    let prezzoTot;
    let rounded;
    if (eta === "minorenne" ) {
        prezzoTot= prezzo-((prezzo / 100) * 20);
        rounded = prezzoTot.toFixed(2);
        console.log(prezzoTot);
        
      
        
    }
    else if (eta === "over65"){
        prezzoTot= prezzo-((prezzo / 100) * 40);
        rounded = prezzoTot.toFixed(2);
        console.log(prezzoTot);
        
    } 
    else if (eta === "maggiorenne")  {
        prezzoTot= prezzo;
        rounded = prezzoTot.toFixed(2);
        console.log(prezzoTot);
        
    }

    
    let blocco= document.querySelector(".generatore2.mostra");
    blocco.style.display="block";

    let nomeBiglietto=document.getElementById("nomeBiglietto").innerHTML=`${nomeCognome}`
    let prezzoBiglietto=document.getElementById("prezzoBiglietto").innerHTML=`${rounded}\u20AC `
    let postoCarrozza=document.querySelector(".valore-carrozza").innerHTML=`${carrozza}`;
    let codice=document.querySelector(".valore-codice").innerHTML=`${codiceCP}`;
  }
 );

 annulla.addEventListener("click", 
   function(){
     let none= document.querySelector(".generatore2.mostra")
     none.style.display="none";
  }
 );