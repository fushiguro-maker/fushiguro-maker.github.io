// scrivi qui il tuo codice JavaScript.
/*function saluta(nome)
{
    return "ciao, " + nome + "!";
}*/


let num = prompt("Inserisci un numero per sapere il suo fattoriale ");
//let i = 1
let fat = 1;
//let b = 1
for (i = 1; i <= num; i++)
{
    fat *= i; // fat = fat * i;
    //a = (i-1)*i;
    //b = (i-1)*b;
}
console.log( num + " fattoriale = " + fat);

