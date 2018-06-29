<magic-tabs tabs='[{"tab": "one", "content": "<h2>Title</h2><br><p>lorem ipsum</p>"}]'></magic-tabs>

Exámen

Tienen a partir de ahora hasta el viernes 29 de junio a las 10pm.

Durante los bloques de clase 7-10pm se resolverán dudas de problemas, bugs, issues; puntuales que se generen durante el desarrollo de la práctica.

Requisitos.
* Generar un directorio magic-tabs/ que contenga magic-tabs.html y index.html
* Dentro de magic-tabs.html deberán contener el webcomponent magic-tabs que manipulará todo el contenido visual.
* Dentro de index.html deberán tener por lo menos 3 demos de implementación.
    * Demo 1: Array con un elemento que ocupe 100% de su contenedor.
    * Demo 2: Array con 3 elementos que ocupen 30% de su contenedor.
    * Demo 3: Array con 50 elementos que se muestren        < 5tabs > proporcionalmente divididos
* El componente visual es iterador de tab/container lo que significa que cada tab(pestaña) está asociado a un div contenedor.
* El componente visual debe considerar una lista virtualmente infinita de elementos.
* La distribución de los tabs debe ser proporcional al tamaño de ancho del elemento que lo contenga(parent) así mismo, el ancho de los divs que contengan la información asociada a los tabs deberán tener el ancho total del componente completo, no de sus tabs.
* Cuando existan 6 elementos o más, deberán aparecer flechas < del lado izquierdo del primer tab (izquierda a derecha) y > del lado derecho del último tab (izquierda a derecha) que servirán como botones para recorrer los tabs como un carousel de tabs.
* Se debe poder personalizar los estilos del componente a través de variables css.
* El componente debe recibir un atributo/propiedad de nombre tabs, que será un array y cada entrada del arreglo deberá tener la siguiente estructura:

{
    "tab": "NOMBRE DEL TAB",
    "content": "HTML String content dentro del div contendor asociado a ese tab"
}

* Se evalúa uso de property reflect to attribute, modificar valor del atributo y una reimpresión del DOM como lo visto en clase.
* Apoyarse de los componentes dom-if (que ustedes generaron en clase) y del componente (dom-repeat) que les proporcioné y sus compañeros modificaron.
* Se pueden agregar propiedades/atributos si ustedes así lo consideran necesario para el desarrollo de su práctica (a cualquier componente, ya sea el mismo del examen, o los dos anteriormente mencionados).



Evaluación. Se califará de 1 al 3; donde 1 es no cumple con los conocimientos, 2 cumple con los conocimientos, 3 domina los conocimientos y los puede aplicar en diversos contextos.