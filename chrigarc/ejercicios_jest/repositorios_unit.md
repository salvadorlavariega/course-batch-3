# Ejercicio Pruebas Unitarias
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

1. Revisar 2 repositorios de Github, en markdown en un archivo de notas del día, donde estén la URL de los repositorios.
A través de la lectura de las pruebas unitarias, describir el comportamiento de por lo menos 5 funciones de cada repositorio.
2. Hacer las pruebas unitarias en Chai o Mocha, (NO Usar Jest) para el pseudocódigo del requerimiento del algoritmo matemáticos del viernes.
3. Programar el código mínimo necesario para que las pruebas pasen.

## Lectura de pruebas unitarias

### Rep.1: https://github.com/auth0/auth0.js/blob/master/test/authentication/authentication.test.js

*  Constructor - Debe recibir de parametro un objeto con el formato { domain: 'foo', clientID: 'cid' }, y generar la instancia correspondiente. Se puede enviar como primer parametro una bandera para activar el espia de las pruebas y el mismo objeto anterior para inicializar la instancia
*  buildAuthorizeUrl - metodo que recibe un objeto generado por las siguientes llaves ['username', 'popupOptions', 'domain', 'tenant', 'timeout',  responseType, redirectUri, prompt, state,
connection_scope: 'scope1,scope2'], si recibe cualquier otra cosa retorna el error correspondiente. El objetivo principal del metodo es por medio del objeto generar urls como esta: 'https://me.auth0.com/authorize?client_id=...&response_type=code&redirect_uri=http%3A%2F%2Fpage.com%2Fcallback'
*  buildLogoutUrl - metodo que recibe un objeto con las siguientes llaves [clientID,  domain, federated, returnTo, responseType, redirectUri] para generar las url de cierre de sesión como la siguiente: 'https://me.auth0.com/v2/logout?client_id=123&returnTo=http%3A%2F%2Fpage.com&federated'
*  userInfo - Función que retorna un objeto con la información del usuario a partir del parametro del username
*  login - metodo para comprobar las credenciales del usuario para iniciar la sesión en caso de ser validas. el objeto que recibe como parametro tiene la siguiente estructura, {username,password,realm}, como segundo parametro recibe una funcion callback.

### Rep.2 https://github.com/tkgeeth/Restful_Service/blob/master/src/test/java/com/vodafone/crud/service/DataServicesImplTest.java
* getEntityById - Retorna el objeto CustomerDto que coincida con el ID entero indicado
* addEntity - Agrega un nuevo CustomerDto y almacena en los registros, asigna un nuevo id. El parametro es CustomerDto pero sin id inicial
* updateEntity - Actualiza los datos de un CustomerDto, pero me entra la duda de si las pruebas estan bien hechas pues para todo retorna el mismo dummy
* deleteEntity - Elimina un CustomerDto de los registros por medio de su ID y retorna un codigo que indica el resultado de la operacion en booleano.
* getEntityList - Retorna una lista de los registros CustomerDto
Cada registro CustomerDto contiene un ID, un nombre, una dirección y un numero de telefono
