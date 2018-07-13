Extraer nodos de un archivo HTML y su CSS.

Solamente extraer nodos y sub nodos.

Cada nodo deberá contener como estructura mínima:

node case:

{
    name: '<camelCase>',
    tag: '<dash-case>',
    attributes: [{
        key = '', value = ''
    }],
    nodes: []
}

<input name="" value="" >

style case:

{
    selectors: [],
    attributes: [{
        key = '', value = ''
    }],
    mixin: ''
}

h3, h4, h5 {
    color: #fff;
    @apply --my-component-titles;
}

Allow variables.




Algoritmo

1.- Recibir cadena HTML
2.- Eliminar espacios de la cadena html
3.- Evaluar la cadena en una expresion regular para obtener el primer tag (abierto | cerrado)

4.- Verificar si el tag obtenido es abierto o cerrado 

    4.1 Si el tag es abierto
        4.1.2 Se agrega a la pila y la variable aux toma ese indice agregado
        4.1.3 Se elimina el tag obtenido del bloque de entrada
    
    4.2 Si el tag es cerrado
        4.2.1 Se valida si el indice aux es igual al tag cerrado
            4.2.1.1 Si es igual se elimina el tag aux de la pila y se agrega al elemento (aux-1)
            4.2.1.2 Se elimina el tag del bloque de entrada
            4.2.1.3 Regresar a paso 3
        4.2.2 Si no coincide el tag abierto con el tag cerrado entonces arrojar exception
            4.2.2.1 Fin





6.- Enviar el elemento encontrado a un analizador de atributos
7.- Leer el bloque HTML para encontrar la siguiente tag abierta
8.- Si se encuentra la tag HTML
8.- Si se encuentra una nueva tag abierta se agrega a la pila


Expresion html abierto <html>
Expresion html cerrado </html>




Generar modulo npm para leer archivos

Generar una salida consola o file


npm link -- enlace simbolico del modulo