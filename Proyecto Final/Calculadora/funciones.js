
let p1 = document.getElementById('pantalla1');
let p2 = document.getElementById('pantalla2');

let calculadora = document.getElementById('calculadora');




function agregar(num){
	p1.innerHTML += num;

	if(p1.innerHTML.length >= 3){
		calcular();
	}
}

function calcular() {
	p2.innerHTML=eval(p1.innerHTML);
}

function resultado(){
	p1.innerHTML = p2.innerHTML;
	p2.innerHTML = "";
}

function borrar(){
	p1.innerHTML = "";
	p2.innerHTML = "";
}

function claro(){
	calculadora.classList.remove('oscuro');
	calculadora.classList.add('claro');
	let boton = document.querySelectorAll('.boton');
	let t = boton.length;

	for(i = t-1 ; i >= 0; i--){
		boton[i].classList.remove('toscuro');
		boton[i].classList.add('tclaro');
	}

	p1.classList.remove('toscuro');
	p1.classList.add('tclaro');
	document.querySelector('#bc').classList.add('activo');
	document.querySelector('#bo').classList.remove('activo');
	document.querySelector('body').classList.remove('claro');
	document.querySelector('body').classList.add('oscuro');
}

function oscuro(){
	calculadora.classList.remove('claro');
	calculadora.classList.add('oscuro');

	let boton = document.querySelectorAll('.boton');
	let t = boton.length;

	for(i = t-1; i >= 0; i--){
		boton[i].classList.remove('tclaro');
		boton[i].classList.add('toscuro');
	}
}
