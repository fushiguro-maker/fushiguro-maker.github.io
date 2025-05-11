function CercaMaggiore(elenco)
{
    let maggiore = elenco[0];

    
    for ( i = 1; i < elenco.length; i++)
    {
        if (maggiore < elenco[i])
            maggiore = elenco[i];

    }
    return maggiore;
}

let elenco = [];
for (a = 0; a < 50; a++)
    elenco[a] = Math.random()*100;
console.log("Il numero maggiore fra questi " + elenco + " è "  + CercaMaggiore(elenco));