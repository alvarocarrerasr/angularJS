# Intro

Angular 2 es un framework web muy utilizado hoy en día. Sin embargo, no podemos entender hoy en día Angular sin TypeScript. Básicamente consiste en ser un lenguaje de programación que engloba a JavaScript, de hecho, el compilador de TypeScript genera código en este segundo lenguaje.

Al ser un lenguaje tipado, nos va a permitir recibir mucho feedback en tiempo de desarrollo y, evitar así, los errores en tiempo de ejecución, que son, claramente los menos deseados.

TypeScript se define como "Javascript that scales". Hace años, nunca se pensó que JS iba a ser lo que es hoy: un gigante con el que se pueden programar robots, páginas Web, aplicaciones móviles, aplicaciones de escritorio y así un largo etcétera. Por este motivo y viendo el grandísimo crecimiento que ha tenido este lenguaje de programación, Microsoft ha lanzado TypeScript, que básicamente consiste en un JS mejorado (o vitaminado), en el que no solo tenemos Orientación a Objetos (en las versiones iniciales de JS esto no existía), sino que además tiene tipado de datos de tipo estático, que además es fuertemente tipado.

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

### ¿Cómo funciona Angular?

Angular funciona de una manera un tanto curiosa. Si observamos el fichero HTML (index.html) podemos observar que hay una línea que pone entre etiquetas "Loading". Pues bien, es ahí el lugar que Angular sustituirá por la plantilla HTML que definamos, de tal forma que, cuando nosotros ejecutamos la orden ng serve y el usuario solicite la URL, esa será la plantilla embebida que se descargará. Todo esto funciona, obviamente, porque edita en tiempo de ejecución el DOM del navegador del usuario.

Similarmente, si observamos con las herramientas del desarrollador de Chrome el código de la página podemos ver que se han embebido, por ejemplo, los ficheros CSS y no se encuentran enlazados, como vendría a ser lógico. 

Es importante señalar que cuando ejecutamos el comando ng serve, Angular ejecuta el fichero main.ts, que se encuentra en /src

### Componentes en Angular

Los componentes son la **pieza clave de Angular**. **Todo en Angular puede ser un componente.** Por ejemplo, en el home de un blog, **podríamos encontrar** los siguientes componentes:

1. El header, donde reside el logotipo del blog, así como un cuadro de texto, con el fin de realizar búsquedas.
2. Un menú lateral, donde se pueden acceder a las diferentes secciones del sitio.
3. El cuerpo del blog, es decir, donde se encuentran las entradas.
4. El footer.
5. ...

Y cada componente tiene su propio código (HTML, CSS y JavaScript) totalmente independiente, de tal forma que podremos reusarlos en cualquier momento, ya que son partes que se "embeben" en el código HTML que finalmente será entregado al navegador web del usuario. Además, los componentes son **reusables**.

Tendremos un componente principal (root component), del que se desplegarán el resto de componentes.

#### Creando un componente en Angular de forma manual

Crearemos los componentes en Angular en la carpeta /src/app. Por convención, lo suyo sería crear una carpeta adicional, dentro de app para cada componente.
El fichero fundamental de un componente es el que alberga el código TypeScript. Así pues, será el primero que deberemos crear.
La estructura más básica es:
````typescript
import {Component} from '@angular/core';

@Component({
    selector  : 'app-infobox',
    templateUrl : './infobox.component.html',
    styleUrls : ['']
})
export class InfoboxComponent {

}

````

Del anterior código destaco:
1. 'selector': Selector será como llamaremos al componente desde otros componentes.
2. Template: Será la plantilla HTML del componente.

**NOTA: ojo con usar template en vez de templateUrl**. Estaremos devolviendo HTML y no una plantilla. Tanto selector, como styleUrl son opciones, pero templateUrl/template son siempre **obligatorios**.

#### Módulos en Angular 
Un módulo en Angular es un conjunto de funcionalidades, que, en nuestro caso, formarán la app final. Por tanto, un módulo engloba los componentes, haciendo así más fácil el deploy de los mismos.

La configuración del módulo se puede encontrar en /src/app/app.module.ts y aquí (en el objeto declarations) es donde deberemos declarar los distintos componentes. Es importante destacar que **deberemos registrar cada uno de los componentes** (si lo hacemos de forma manual), ya que Angular no escaneará los directorios buscando componentes.

### Creando un componente en Angular de forma automática
Todos los pasos anteriores pueden ser sustituidos por un simple comando:
```bash
ng generate component [component-name]
```
O bien, el comando reducido
```bash
ng g c [component-name]
```
El mismo Angular nos creará una carpeta con el HTML, el fichero TypeScript de configuración del componente, un fichero de tests, así como los diferentes selectors y habrá añadido la línea correspondiente para registrarr el componente en el módulo de la aplicación.