# Web components
## Pilares
* Custom Elements
* ShadowDom
* Templates
* HTML Imports

IDLE ?
Lightdom: Scope global de HTML, JS y CSS
ShadowDom: Encapsula diferentes nodos, donde se define un solo scope para sus subnodos, de igual forma encapsula el CSS y JS.
Custom Elements:  Etiquetas HTML personalizadas que contiene HTML, CSS, y JS embebido.
Templates: Los templates son el contenido HTML y es emebebido en el ShadowDOM.
HTML Imports: Importacion de archivos utilizando la etiqueta 

    <link rel="import" href="foo/bar.html">

Variables CSS - permite editar una propiedad en especifico de un webcomponent
https://www.w3schools.com/css/css3_variables.asp

Apply CSS - permite modificar o integrar un bloque de estilos dentro de un css interno del component.
https://tabatkins.github.io/specs/css-apply-rule/

Desventajas
* Comunicacion
* Dependencia

# Herramientas de Desarrollo (Devtools)

## Memoria

Tomar snapshot: 
En el panel Profiles, elige  **Take Heap Snapshot**  y haz clic en  **Start**  o presiona  Cmd  +  E  o  Ctrl  +  E.

Borrar snapshots:
Quita capturas de pantalla (de DevTools y la memoria del representador) presionando el ícono Clear all profiles.

Capturas de pantalla:
La vista  **Summary**  muestra los objetos agrupados por nombre del constructor. Úsala para encontrar objetos (y el empleo que hacen de la memoria) según el tipo agrupado por nombre de constructor. Es especialmente útil para  [localizar las fugas del DOM](https://developers.google.com/web/tools/chrome-devtools/profile/memory-problems/memory-diagnosis#narrow-down-causes-of-memory-leaks).

La vista  **Comparison**  muestra diferencias entre dos capturas de pantalla. Úsala para comparar dos (o más) capturas de pantalla de memoria antes y después de una operación. Inspeccionar el delta en la memoria libre y el recuento de referencias te permite confirmar la presencia y la causa de una fuga de memoria.

La vista  **Containment**  permite explorar el contenido del montón. Te brinda una mejor vista de la estructura de objetos, lo cual permite analizar los objetos a los que se hace referencia en el espacio de nombres general (ventana) para descubrir la razón por la cual no se borran. Úsala para analizar cierres y examinar los objetos en un nivel bajo.

La vista  **Dominators**  muestra  [el árbol del dominador](https://developers.google.com/web/tools/chrome-devtools/profile/memory-problems/memory-101#dominators)  y puede ser útil para encontrar puntos de acumulación. Esta vista ayuda a confirmar que no se siguen manteniendo referencias inesperadas a objetos y que la recolección o la eliminación de elementos no utilizados realmente funciona.


