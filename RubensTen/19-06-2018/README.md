# Web components Sesión 2
 
 Los componentes web permiten crear nuevas etiquetas HTML personalizadas, reutilizables y encapsuladas para usar en aplicaciones web.
 
## Templates
La implementación de templates se lleva acabo por medio de la etiqueta

	<template><p>Foo Bar</p></template>

Y tiene como objetivo encapsular y/o contener HTML que sera asociado a una clase ES6, donde este template sera embebido en el shadow dom del custom element.

En la clase ES6 debe extenderse de la clase HTMLElement, y dentro que se asocia al template se pueden definir propiedades para leer o agregar valores asi como definir eventos personalizados.

### HTMLElement
 La interfaz HTMLElement representa cualquier elemento HTML. Algunos elementos implementan directamente esta interfaz, otros la implementan a través de una interfaz que la hereda.

### Custom Events
Clase ES6 que permite generar eventos personalizados con ciertas propiedades para disparar eventos con informacion tanto dentro como fuera del shadow dom.


 

## Dudas 
* connectedcallback - Lifecycle
* CustomEvents
* Databinding
* HTMLElement


## Referencias 
https://cdnjs.com/libraries/webcomponentsjs
https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
