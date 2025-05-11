let sfondo = document.getElementById('div_box');
let yellowBtn = document.getElementById('btn1'), 
    blueBtn = document.getElementById('btn2'),
    greenBtn = document.getElementById('btn3');
yellowBtn.addEventListener('click', function()
{
    sfondo.style.backgroundColor = "rgb(249, 251, 141)";
});
blueBtn.addEventListener('click', function()
{
    sfondo.style.backgroundColor = "rgb(114, 194, 255)";
});

greenBtn.addEventListener('click', function()
{
    sfondo.style.backgroundColor ="rgb(99, 252, 127)";
});