function calcoloPrimo(N)
{
    if (N <= 1)
    {
       return false;
    }
    else
    {
        for (i = 2; i <= Math.sqrt(N); i++)
        {
            let rest = N%i;
       
            if (rest == 0)
                return false;
         }
         return true;
    }
}

let num = Number(prompt("Inserisci un numero per sapere se è primo"));
if(!isNaN(num))
{
    let primo = calcoloPrimo(num);

    if(primo)
        console.log(num + " è primo");
    else
        console.log(num + " non è primo");
}
else
   console.log("Hai inserito un numero non valido");

