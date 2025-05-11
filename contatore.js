window.onload = function () {
	let contatore = 0; 
	let reset = document.getElementById('btn_reset'),
		add = document.getElementById('btn_add'),
		sub = document.getElementById('btn_sub'),
		cont = document.getElementById('contatore');
	sub.addEventListener('click', function()
	{
		contatore -= 1;
		//console.log(contatore);
		cont.textContent = contatore;
	});
	add.addEventListener('click', function()
	{
		contatore += 1;
		//console.log(contatore);
		cont.textContent = contatore;
	});
	reset.addEventListener('click', function()
	{
		contatore = 0;
		//console.log(contatore);
		cont.textContent = contatore;
	});
	console.log(contatore);
}
