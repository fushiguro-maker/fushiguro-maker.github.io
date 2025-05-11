let num = prompt("Inserisci un numero per sapere il suo fattoriale ");
let i = 2
let a = 0
let b = 1
for (i = 2; i<= num; i++)
    {
     //a = (i-1)*i;
     b = (i-1)*b;
    }
console.log( num + " fattoriale = " + b);
