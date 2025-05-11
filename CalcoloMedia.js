function CalcoloMedia(elenco)
{
    let somma = 0;
    for (i = 0; i < elenco.length; i++)
        somma += elenco[i];

    return somma/elenco.length;
}

let elenco=[];
let len = Number(prompt("Inserisci valore della lunghezza dell'elenco "));
for (i = 0; i < len; i++)
    elenco[i] = Number(prompt("Inserisci il " + i + "-esimo numero dell'elenco "));
console.log("La media tra i tuoi numeri è " + CalcoloMedia(elenco));