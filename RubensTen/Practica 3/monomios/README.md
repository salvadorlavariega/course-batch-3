https://matematica.laguia2000.com/general/suma-de-monomios

Suma de monomios 

Variables
	- Coeficientes
	- Variables (literales)

Tipos de monomios

* Semejantes 
* No semejantes


La suma de monomios genera otro monomio

Lista de monomios


Ejemplo 
1x + 1x = 2x



Expresiones regulares para validar entradas de monomios 

Monomios semejantes: ["1x^2y^3", "2x^2y^3"]
Monomios no semejantes: ["1a^2b^3", "2a^2c^3"]


El resultado debe de inyectarse en los numeros antes de cada caret



Suma de monomios no semejantes no se puede realizar


Propiedades que debe cumplirse para la suma de monomios

- Para realizar la suma de monomios debe cumplirse la propiedad asociativa y conmutativa

El orden de los monomios no altera los resultados



function isMonomio(monomio) {
	retornar (monomio === expresionRegular)
}

function esSemejante(listaMonomios) {
	iterar con X listaMonomios {
		variablesExponentesX = obtenerVariablesYExponentes(itemMonomio[x]);
		iterar con (Y+1) listaMonomios {
			variablesExponentesY = obtenerVariablesYExponentes(itemMonomio[y]);
			Si (variablesExponentesX !== variablesExponentesY) {
				return false;				
			}
		}
	}
	return true;
}




function promesa() {	
	return new Promise((resolve, reject) => {
		resolve(() => ['foo', 'bar'])
	});
}

promesa().then(data => {
	data() === [];
});





function anonima () {
	return []
}
