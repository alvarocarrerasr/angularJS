# Intro

Angular 2 es un framework. Básicamente consiste en ser un lenguaje de programación que engloba a JavaScript, de hecho, el compilador de Angular genera código en este segundo lenguaje.

Al ser un lenguaje tipado, nos va a permitir recibir mucho feedback en tiempo de desarrollo y, evitar así, los errores en tiempo de ejecución, que son, claramente los menos deseados.

Angular se define como "Javascript that scales". Hace años, nunca se pensó que JS iba a ser lo que es hoy: un gigante con el que se pueden programar robots, páginas Web, aplicaciones móviles, aplicaciones de escritorio y así un largo etcétera. Por este motivo y viendo el grandísimo crecimiento que ha tenido este lenguaje de programación, Microsoft ha lanzado TypeScript, que básicamente consiste en un JS mejorado (o vitaminado), en el que no solo tenemos Orientación a Objetos (en las versiones iniciales de JS esto no existía), sino que además tiene tipado de datos de tipo estático, que además es fuertemente tipado.

En la versión 1 de Angular, no se desarrollaba usando TypeScript. Sin embargo, en la 2, Google (desarrollador principal de Angular) y Microsoft (desarrollador principal de TypeScript) decidieron ponerse de acuerdo para poder utilizar Angular usando TypeScript.

Un sitio Web de Angular cuenta con un fichero HTML que desplegará todas las vistas de nuestro sitio. Será labor de Angular traducir lo que hemos programado a HTML, JS... y de mostrar al usuario, utilizando las APIs del DOM, el sitio Web, dando así una apariencia de carga muchísimo más rápida (ya que no deberemos volver a descargar los contenidos del servidor cada vez que se realiza una petición HTTP). Los sitios web fabricados usando Angular se caracterizan por ser muy reactivos (Reactive).

## Versiones de Angular.

Tenemos 2 versiones de Angular (a fecha Septiembre de 2017):

1. Angular 1: Es el Angular inicial, basado en JS puro. 
2. Angular 2 & Angular 4: Se saltó la versión 3 por problemas de versionado. Es el Angular que se desarrollará en este repositorio y es el futuro de Angular.

--------------------

Se requerirá tener instalado NodeJS, así como NPM y Angular. Ver fichero "AngularCLITypeScript.md", que se encuentra en el root del repo para más información.

# Angular

Los IDEs recomendados para programar en Angular son:

* WebStorm, de JetBrains. Es un editor muy similar a Android Studio (los creadores son los mismos).
* Visual Studio Code, de Microsoft. Es un editor creado en TypeScript y tiene muy buen soporte de Angular. Es el que voy a utilizar para seguir este curso.

Otros usuarios preferirán el famosísimo Atom, de Github o Sublime Text. Y siempre estará el eterno debate Emacs VS VI(M).

## Creando un proyecto con Angular.

Creamos un proyecto de Angular mediante el comando
````bash
ng new [nombre del proyecto]
````
Se nos creará una carpeta con varios ficheros.
Posteriormente ejecutaremos el proyecto utilizando el servidor:
````
ng serve
````
**Sólo podremos ver cómo va a quedar realmente nuestro proyecto ejecutando el comando anterior.**

### Ficheros en un directorio de Angular.

Me llama la atención la gran cantidad de ficheros que genera Angular CLI cuando se ejecuta el comando de nuevo proyecto. Estaba acostumbrado a otros frameworks como Cordova que generan muchos menos de serie. 
Algunos de los que podemos encontrar son:
1. Carpeta e2e: Se utilizará para testing.
2. Ficheros que se encuentran en el root el proyecto: como .angular-cli.json, .editorconfig o tsconfig.json; son ficheros de configuración.
3. Carpeta src: Aquí es donde estará lo importante del proyecto.
    * Carpeta assets: para ficheros estáticos.
    * Carpeta environments: para ficheros de configuración de tipo environmen (variables de entorno).
    * Fichero index.html: también un fichero destacado. Será lo que nuestros usuarios verán, pero, por lo general, nosotros no lo manipularemos, sino que será Angular mediante las APIs del DOM las que harán que el usuario vea lo que hemos programado.
    * Carpeta app: aquí se encontrarán la mayoría de archivos que editaremos en la mayor parte del tiempo.
4. Carpeta node_modules: aquí se instalarán los paquetes que solicitemos mediante la orden npm install.

### Instalación de plantillas CSS en un proyecto Angular

Es posible incluir hojas de estilo CSS editando directamente el fichero index.html. Sin embargo, es mejor no hacerlo así, ya que Angular nos ofrece una solución mucho mejor.
1. Por defecto, Angular nos define un fichero "styles.css" (que se encuentra en /src), donde podremos definir nuestros propios estilos.
2. También podremos utilizar el fichero .angular-cli.json (/ del proyecto). En ese objeto JSON podemos definir en la propiedad apps.styles, un nuevo fichero CSS, que se enlazará con el Webpack de Angular.
    * De esta forma podremos instalar muy fácilmente plantillas o, incluso frameworks como Bootstrap.
    ````bash
    npm install --save bootstrap
    ````


