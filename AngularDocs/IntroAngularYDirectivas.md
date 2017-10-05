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

# Angular. Introducción a Angular.

Los IDEs recomendados para programar en Angular son:

* WebStorm, de JetBrains. Es un editor muy similar a Android Studio (los creadores son los mismos).
* Visual Studio Code, de Microsoft. Es un editor creado en TypeScript y tiene muy buen soporte de Angular. Es el que voy a utilizar para seguir este curso.

Otros usuarios preferirán el famosísimo Atom, de Github o Sublime Text. Y siempre estará el eterno debate Emacs VS VI(M).

## Creando un proyecto con Angular.

Creamos un proyecto de Angular cmediante el comando
````bash
ng new [nombre del proyecto]
````
Se nos creará una carpeta con varios ficheros.
Posteriormente ejecutaremos el proyecto utilizando el servidor:
````
ng serve
````

Y ya cuando hayamos llegado al final del desarrollo de la app, podremos finalmente compilarlo todo en unos pocos ficheros, que podrán ser colocados **en cualquier servidor**, es decir, no hay una dependencia de que una app Angular tenga que estar colocada en un servidor Express con NodeJs (era lo que yo pensaba). El comando siguiente generará los correspondientes ficheros JS, CSS y el fichero HTML:
```bash
ng build --prod
```
El output del comando anterior se colocará en la carpeta dist del proyecto.
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
    * El selector puede ser:
        1. un elemento. Ej: app-infobox. Lo referenciaremos desde el HTML como <app-infobox></app-infobox>
        2. un atributo. Ej: [app-infobox]. Lo referenciaremos desde el HTML como <div app-infobox></div>
        3. una clase: Ej: .app-infobox. Lo referenciaremos desde el HTML como <div class=".app-infobox"></div>
    * En definitiva, hay tres métodos para referenciar un componente Angular desde el HTML. Sin embargo, el más común será el primero.
2. templateUrl: Será la plantilla HTML del componente. En ruta relativa
3. styleUrls: Es un array en el que colocaremos la ruta relativa de cada uno de los estilos que queremos en nuestro sitio web.

Además de los anteriores podremos añadir:

4. style: es un array de strings (recordemos que acento agudo para hacer un array multilínea en JS) de código CSS. Útil si queremos colocar poco código CSS (poquísimas líneas).
5. template: código HTML que formará el template de la página. Útil si la plantilla tiene muy pocas líneas de código.

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

## Databinding. Comunicación entre la lógica del negocio (código Angular) y el navegador del usuario.

En ocasiones nos puede resultar interesante poder comunicar, por ejemplo, una variable almacenada en el código TypeScript en el HTML (o viceversa). O incluso nos puede llegar a interesar un canal de comunicación de ambos sentidos. Todo esto se tratará en este apartado.

### Output Data (Business Logic -> HTML)
El método más común es *String interpolation*.
En el código HTML de la plantilla insertaremos:
```html
<p>My name is {{ name }} and I'm {{ age }} years old.</p>
```
Y en el código TypeScript
```typescript
export class MyComponent{
    name : string = "Alvaro",
    age : number = 21
}
```
Nota: todo el texto (monolínea) encerrado entre curly braces/llaves ( {{ }} ), Angular lo convertirá en un String (en el caso de que no sea String, lo intentará castear automáticamente.)

Nota 2: en el código TypeScript anterior no he añadido el tipo de cada una de las variables porque TypeScript indica que no es necesario, ya que lo infiere de forma automática.

#### Property binding
Esta es una característica derivada de la anterior. Supongamos que queremos modificar en tiempo de ejecución una propiedad de un elemento del DOM. Angular nos lo pone muy fácil, ya que será tan fácil como indicarle que la variable va a almacenar un valor que se deberá colocar como propiedad. Por ejemplo:

```html
<button [disabled]="disableButton">Click me if you can!</button>
```

Si disableButton está con el valor false, entonces la propiedad disabled del botón tendrá este mismo valor.
A esta característica de Angular se la denomina Property Binding.

Ojo: property binding no lleva llaves (curly braces). Angular no lo permite. Deben ser comillas dobles. 

### Input Data (HTML -> Business Logic)
Para hacer input data, es decir, para poder reaccionar a los eventos del usuario utilizaremos Event Binding, muy similar a los típicos on... de HTML y Javascript.
Para poder reaccionar a los clicks de un botón (ejemplo anterior utilizaremos el event click):
```html
<button (click)="onClickButton()">Click me if you can!</button>
```

En el sitio web de [MDN](https://developer.mozilla.org/en-US/docs/Web/Events) podemos encontrar los diversos eventos que existen. Solo habría que ver cuáles son compatibles con el objeto que queremos utilizar.

Los eventos, por lo general, llaman a la función listener con un argumento ($event), que contiene datos útiles, como qué elemento lo ha llamado o por qué. 

### Two-way binding (Business Logic <-> HTML)

Podremos realizar el two-way binding por medio del 'ngModel', para lo cual deberemos importar @angular/forms en el array imports dentro de AppModule. Es decir, deberemos añadir lo siguiente:
```typescript
import { FormsModule } from '@angular/forms';
```
En la cabecera de app.module.ts, además de hacer la importación adecuada:
```typescript
@NgModule({
  declarations: [
    ....
  ],
  imports: [
    ...
    FormsModule
  ],
  providers: [...],
  bootstrap: [...]
})
export class ... { ... }
```

Por último conectaremos el elemento HTML con Angular mediante [(ngModel)]="usernameNew" (en este caso uniríamos un doble camino con la variable usernameNew).

## Directives

Directives son instrucciones que damos desde Angular para modificar el DOM. Hay directives que se realizan desde el template HTML (p.ej. las etiquetas que vimos para añadir un componente) y otras que se hacen desde el mismo código TypeScript, que se crearán mediante decorators en el código.
### Structure Directives
Son directivas que modifican el DOM, añadiendo o eliminando elementos. Por lo general, suelen llevar un asterisco (*) justo delante de la directiva (así indicamos que son de este tipo).
1. ngIf: para una estructura condicional.
    * Para else, el camino se complica un poco:
        ```html
        <p *ngIf="booleanCondiction; else noBool"> Message to show</p>
        <ng-template #noBool>
        <p>Else message</p>
        ```
2. ngFor: para crear un bucle que itere sobre una colección de elementos.
    ```html
    <ul>
    <li *ngFor="let element of arrayList"> {{ element }}</li>
    </ul>
    ```
    **Importante**: el of en vez del in..
    **Nota 0**: podremos además acceder al índice añadiendo la siguiente instrucción en ngFor: 
        ```javascript
        <div *ngFor="....; let i = index"></div>
        ``` 
### Attribute Directives
La mayoría de directivas **no** añaden o eliminan elementos, sino que modifican aquellos elementos que tienen asociados.
#### NgStyle, una directiva para cambiar el estilo de los elementos.
Una directiva bastante útil y que sirve para cambiar el estilo de los diferentes elementos es ngStyle. 

1. Si la propiedad a cambiar la escribimos con un guión intermedio, la propiedad irá entre comillas simples.
    ```html
    <p [ngStyle]="{'background-color':'red'}">Text</p>
    ```
2. Si, por el contrario, va en *Camel Case*, se escribirá sin comillas
    ```html
    <p [ngStyle]="{backgroundColor:'red'}">Text</p>
    ```
**Importante**: la directiva es **ngStyle** y no **[ngStyle]**. Se pone entre corchetes porque vamos a modificar una propiedad de un elemento (ya se ha visto en otro apartado). Se denomina **property binding**.
**Nota**: en vez de poner directamente el valor (en este caso red), podríamos haber puesto una función.
#### NgClass
NgClass nos permitirá modificar dinámicamente las clases CSS de un elemento.
```html
<p [ngClass]="{cssStyle: javascriptCondition}">Text</p>
```
Al igual que en el caso anterior, si tiene guión intermedio la clave, se pondrá entre comillas simples.

## Routes 

Angular nos ofrece un paradigma de elaboración de páginas web single-page, es decir, todo se realizará sobre un mismo elemento HTML, en nuestro caso el index.html. Quizá esto podría dar a entender que no nos da la flexibilidad que podríamos requerir para poder hacer webs complejas. El routing soluciona este problema, permitiéndonos mostrar ciertas partes del sitio web, dependiendo de cuál es la ruta (path) que el usuario esté navegando.

## Comunicación entre componentes (manejo de eventos)

Puede llegar a ser muy interesante que dos o más componentes se puedan comunicar entre sí. Distinguimos dos tipos de comunicación:
1. Del componente padre al hijo.
Es quizá uno de los más directos. Por un lado, deberemos colocar **en la plantilla HTML del componente padre**, el binding de la variable que queramos asociar:
```html
<app-timeline [VARIABLE_CHILD]="VARIABLE_PARENT"></app-timeline>
```
En donde:
    1. VARIABLE_CHILD es una variable que podremos encontrar en el código TypeScript del componente **hijo** y que **tiene** el decorator **@Input()**. Nota: Input hay que importarlo del paquete @angular/core.
    2. VARIABLE_PARENT es una variable que podremos encontrar en el código TypeScript del componente **padre** y que **tiene** el decorator **@Output()**.Nota: Output hay que importarlo del paquete @angular/core.
Nota: recibiremos en VARIABLE_CHILD un puntero en caso de tipos de datos compuestos (paso de parámetros por referencia), es decir, podremos tener problemas de aliasing. En el caso de tipos de datos simples (number, string...) el paso de parámetros se hará por valor, por lo que no existirá ese problema.

2. Del componente hijo al padre.
    1. Para hacer un paso por parámetros del hijo al padre, primeramente tendremos que importar una serie de elementos en el **componente hijo**:
    ```typescript
    import { Output, EventEmitter } from '@angular/core';
    ```
    2. A continuación, generaremos un evento. En el código del componente hijo:
    ```typescript
    @Output() myNewEvent = new EventEmitter<>();
    ```
    Nota: en el snippet anterior, myNewEvent será el nombre del nuevo evento, y deberemos tenerlo presente a la hora de hacer el binding del evento.
    3. Seguidamente, configuramos la emisión de eventos en el código TypeScript del hijo.
    ```typescript
     this.eventEmitter.emit(ELEMENT_TO_EMIT);
    ```
    En donde ELEMENT_TO_EMIT será el objeto que querremos pasar al padre.
    4. Por último configuramos el listener del nuevo evento en el padre.
        1. En el código HTML del template del padre
        ```html
        <app-form-add (myNewEvent)="onEvent($event)"></app-form-add>
        ```
        En donde, onEvent(), será el método ubicado en el código TypeScript del componente padre y myNewEvent el nombre del evento generado en el paso 2.
        2. En el código TypeScript del padre crearemos el listener del evento, en el caso de este ejemplo se llamará onEvent().