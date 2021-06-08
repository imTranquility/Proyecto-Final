window.addEventListener("load",cargar)
function iniciar(){
//Buscar si en nuestro local storage existe algo almacenado
	cargar();
	respuesta = prompt("Bienvenido \n1.- Agregar Contacto"+
								  "\n2.- Ver contacto"+
								  "\n3.- Buscar Contacto"+
								  "\n4.- Editar Contacto"+
								  "\n5.- Salir");


switch(respuesta)
{
	case('1'):
		agregarContacto();
	break;

	case('2'):
		verContactos();
	break;

	case('3'):
		buscarContacto();
	break;

	case('4'):
		editarContacto();
	break;

	case('5'):
		alert("Adiós :)")
	break;

	default:
		alert("Opción Incorrecta, introduza una opcion valida");
		iniciar();
	break;
}

}

function agregarContacto(){
	
	nom = document.querySelector("#agregarNom");
    num = document.querySelector("#agregarNum");
    corr = document.querySelector("#agregarEmail")

    nombres.push(nom.value);
    numeros.push(num.value);
    correos.push(corr.value);

    guardar();
    cargar();
}

function verContacto(){

	 for(i=0;i<nombres.length;i++)
    {
        alert("Nombre: " + nombres[i]+"\nNumeros: " + numeros[i]
        +"\nCorreos: " +correos[i]);
    }
    iniciar();
}

function buscarContacto(){

	busqueda = document.querySelector("#buscarCon").value;
    indice = nombres.indexOf(busqueda);
    if(indice>=0)
    {
        alert("Nombre: " + nombres[indice]+"\nNumeros: " + numeros[indice]
        +"\nCorreos: " +correos[indice]);
    }
    else
    {
        alert("No se encontro resultado");
    }
}

function editarContacto(){

	busqueda = document.querySelector("#editarCon").value;
    indice = nombres.indexOf(busqueda);
    if(indice>=0)
    {
        nuevoNom = document.querySelector("#nuevoNombre").value;
        nuevoNum = document.querySelector("#nuevoTel").value;
        nuevoCorr = document.querySelector("#nuevoCorr").value;

        nombres[indice] = nuevoNom;
        numeros[indice] = nuevoNum;
        correos[indice] = nuevoCorr;

        guardar();
    }else
    {
        alert("No se encontraron resultados")
    }
    cargar();
}

function guardar(){
	localStorage.setItem("nombresLS",nombres);
	localStorage.setItem("numerosLS",numeros);
	localStorage.setItem("correosLS",correos);
}

function cargar(){

	   if (localStorage.getItem("nombresLS")) {
        //Sacar los datos 
        nombres = localStorage.getItem("nombresLS");
        numeros = localStorage.getItem("numerosLS");
        correos = localStorage.getItem("correosLS");
        //Hacerlos arreglo
        nombres = nombres.split(',');
        numeros = numeros.split(',');
        correos = correos.split(',');

    } else {
        nombres = [];
        numeros = [];
        correos = [];
    }
    vercontactos = document.querySelector('section');
    vercontactos.innerHTML ="";
    for(i=0;i<nombres.length;i++)
    {
        vercontactos.innerHTML += "<div class='contactos'><h5>"+nombres[i]+"</h5>"+
                                "<h6>"+numeros[i]+"</h6>"+
                                "<h6>"+correos[i]+"</h6>"+
                                "</div>"
    }
}