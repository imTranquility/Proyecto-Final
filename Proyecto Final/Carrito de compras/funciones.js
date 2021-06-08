let productos=[[0,"Gansito",15],
			   [1, "Chokis",12],
			   [3,"Cheetos",11],
			   [4,"Snickers",20],
			   [5,"Delaware Punch",15]];

window.addEventListener("load",cargar);

function cargar(){

	// La variable S es nuestro section del HTML
	 s = document.querySelector('section');

	 //Recorrera el arreglo productos
	 for (i = 0; i < productos.length; i++){

	 //En s vamos a imprimir los productos
	 	s.innerHTML+="<div id='"+productos[i][0]+"'>"+
	 					  "<h1>"+productos[i][1]+"</h1>"+
	 					  "<p>$"+productos[i][2]+"</p>"+
	 					  "<button onclick='agregar("+productos[i][0]+")'>+</button>"+
	 					  "</div>";
	 }
}

//Agregar productos al carrito
let carrito=[];

function agregar(id)
{
	carrito.push(id);
	document.querySelector('s').innerHTML = carrito.length;
}

function mostrarCarrito(){

	listaProductos = document.querySelector('nav');
	//Ir recorriendo carrito
	for(i=0 ; i<carrito.length ; i++){

		//Ir recorriendo producto
		for(j=0 ; j<productos.length ; j++){

			if (productos[j][0]==carrito[i]){

				listaProductos.innerHTML+="<div id='listaNav'>"+
                                          "<h1>"+productos[j][1]+"</h1>"+
                                          "<p>$"+productos[j][2]+"</p>"+
                                          "</div>";
				
			}
		}
	}
}

function visibilidad(){

	document.querySelector('nav').classList.toggle("visible");
    document.querySelector('section').classList.toggle("sn");
    lista = document.querySelector('nav');
    if(lista.innerHTML=="")
    {
        mostrarCarrito();
    }
    if(lista.classList=="")
    {
        lista.innerHTML="";
    }
}