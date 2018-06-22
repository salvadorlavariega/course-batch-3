# Profiling memory performance - Rendimiento de memoria de perfil

El navegador Chrome cuento con una herramienta para conocer el estado de la memoria al momento de cargar una pagina, esta herramienta ayuda a los desarrolladores a conocer la serie de procesos, nodos y llamadas que ejecuta el navegador para renderizar una pagina web.

## Capturar un snapshot
Dentro del inspector en la pestaña `Memory`, seleccionamos la opción de tomar un head snapshop.
Las instantáneas se almacenan inicialmente en la memoria de proceso del procesador. 

## Limpiar snapshots
Una vez generada, es posible eliminarlas
## Comparar
Cuando se toma más de una instantánea de montón, es posible compararlos y encontrar objetos filtrados. Para verificar que una determinada operación de aplicación no cree pérdidas (por ejemplo, normalmente un par de operaciones directas e inversas, como abrir un documento y luego cerrarlo, no debería dejar basura).

## Containment view
La vista de contención es esencialmente una "vista de pájaro" de la estructura de objetos de su aplicación. Le permite echar un vistazo dentro de los cierres de funciones, observar los objetos internos de VM que juntos componen sus objetos de JavaScript y comprender cuánta memoria utiliza su aplicación en un nivel muy bajo.

# Bibliografía
https://developer.chrome.com/devtools/docs/heap-profiling
