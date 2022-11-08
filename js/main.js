let tasto= document.getElementById("genera");
let tastoAnnulla= document.getElementById("annulla");

  tasto.addEventListener("click", 
   function(){
    let nomeCognome=document.getElementById("inputNomeCognome").value;
    let chilometri=document.getElementById("inputKm").value;
    // let eta=document.getElementById("inputEta").value;
    let eta=document.getElementById("select-eta");
    // let minorenne=document.getElementById("minorenne");
    // let maggiorenne=document.getElementById("maggiorenne");
    // let over65=document.getElementById("over65");
    let carrozza=Math.floor(Math.random() *10)+1;
    let codiceCP=Math.floor(Math.random() *100000)+10000;
    let prezzo= 0.21 * chilometri;
    console.log(prezzo);
    let prezzoTot;
    let rounded;
    if (eta < 18 ) {
        prezzoTot= prezzo-((prezzo / 100) * 20);
        rounded = prezzoTot.toFixed(2);
        console.log(prezzoTot);
        
      
        
    }
    else if (eta > 64){
        prezzoTot= prezzo-((prezzo / 100) * 40);
        rounded = prezzoTot.toFixed(2);
        console.log(prezzoTot);
        
    } 
    else if (eta > 18 && eta < 64)  {
        prezzoTot= prezzo;
        rounded = prezzoTot.toFixed(2);
        console.log(prezzoTot);
        
    }

    
    let blocco= document.querySelector(".generatore2.mostra");
    blocco.style.display="block";

    let nomeBiglietto=document.getElementById("nomeBiglietto").innerHTML=`${nomeCognome}`
    let prezzoBiglietto=document.getElementById("prezzoBiglietto").innerHTML=`${prezzoTot}\u20AC `
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