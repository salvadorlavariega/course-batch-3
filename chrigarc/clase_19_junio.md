# WebComponents 
Web Components constiste en distintas tecnologías independientes. Puedes pensar en Web Components como en widgets de interfaz de usuario reusables que son creados usando tecnología Web abierta. Son parte del navegador, y por lo tanto no necesitan bibliotecas externas como jQuery o Dojo. Un Web Component puede ser usado sin escribir código, simplemente añadiendo una sentencia para importarlo en una página HTML. Web Components usa capacidades estándar, nuevas o aún en desarrollo, del navegador.

Web Components no están implementados completamente en todos los navegadores todavía, y por lo tanto para usarlos en la mayoría de navegadores (enero de 2015) probablemente necesitarás usar polyfills para rellenar los huecos en la cobertura de los navegadores. Hay disponibles polyfills en el proyecto Google Polymer .

## Soporte de navegadores

|  | Chrome | Opera | Safari | Firefox | Edge |
| ------ | ------ | ------ | ------ | ------ | ------ |
| HTML Templates | Stable | Stable |  Stable | Stable |  Stable |
| Custom Elements |  Stable |  Stable |  Stable |  Polyfill / Developing | Polyfill / Considering |
| Shadow DOM |  Stable |  Stable |  Stable |  Polyfill / Developing |  Polyfill / Considering | 
| Es modules |  Stable |  Stable |  Stable |  Stable |  Stable |
| HTML Imports |  Stable |  Stable |  Polyfill |  Polyfill |  Polyfill | 
* En el caso de Firefox ex posible activar las opciones de custom web components en `about:config`, pero estan en estapa experimental

## Elementos fundamentales de web components
- Custom Elements - Permite generar tags personalizados; Como reestricción los tags deben ser de al mnos dos palabras separadas por guión medio
- ShadowDOM - Permite encapsular HTML, JS y CSS en otra parte del dom con lo cual no no se afecta el comportamiento de los componentes desde fuera
- Templates - Código estatico que se puede personalizar de forma dinamica; Viven en el Live DOM y con JS se inscrusta dentro del Shadow DOM
- HTML Imports - Importar web componentes por medio de un archivo html 
``` html 
<link rel="import" href="archivo-componente.html" >
```
## Polyfill
En el desarrollo web, un polyfill es un código que implementa una función en los navegadores web que no son compatibles. En la mayoría de los casos, se refiere a una biblioteca de JavaScript que implementa un estándar web HTML5, ya sea un estándar establecido (compatible con algunos navegadores) en navegadores antiguos o un estándar propuesto (no compatible con ningún navegador) en los navegadores existentes.

## Ejercicio
Revisar y generar dudas y anotaciones sobre las siguientes paginas del repositorio
1. /alfonsorios96/webComponents/template/customScriptTemplate.html
2. /alfonsorios96/webComponents/template/customTemplate.html
3. /alfonsorios96/webComponents/template/hiddenDivTemplate.html
4. /alfonsorios96/webComponents/template/templateTag.html

### Observaciones y dudas
1. Desconcia totalmente el tipo `text/template` pero es un bloque de codigo que no aparace en el navegador, que por medio de otros scripts puede ser selecciando e inscrustado en alguna parte del documento
2. Esta es la alternativa chafa para strings templates
3. Desconocia totalmente el atributo `hidden` conocerlo me hubiera ahorrado mucha chamba al tener que ocultor o mostrar elementos. En la pagina demo no permite usarlo mas de una vez
4. Lo interesante es jugar con la bandera `deep` que si la pones en false practicamente no realiza nada pues ni con el texto simple dentro de template hace la copia, ya que el texto lo considera un nodo hijo.

Fuera de los ejercicios la duda que tenia era el porque se necesitaban polyfill pero revisando ya la documentación es que a pesar que lleva un rato que salio como estandar no ha sido terminado de implementar y probar, pero supongo que falta poco para poder hacer uso sin miedo de estas nuevas caracteristicas en todos los navegadores modernos.

# Bibliografía 
https://developer.mozilla.org/es/docs/Web/Web_Components
https://html.spec.whatwg.org/multipage/scripting.html#the-template-element
https://www.webcomponents.org/
