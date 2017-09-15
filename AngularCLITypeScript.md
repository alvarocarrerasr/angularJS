# Comandos principales para el CLI (Command Line Interface) de Angular

## Requisitos iniciales
Se necesitará tener instalada la última versión de NodeJS, ya que incluye en su instalador NPM.

## Pasos para instalar Angular & NPM:

1. Actualizar NPM (Node Package Manager):
```bash
npm install -g npm
```
2. Instalar Angular desde NPM:
```bash
npm install -g @angular/cli
```

## Troubleshooting
1. Error EADDR (Address already in use): Lo más problable es que tengamos ya un proceso ng sirviendo en el puerto indicacado. Podremos matar ese proceso, o bien, lanzar uno nuevo mediante la orden:
```bash
ng serve --port ANOTHERPORT
```

2. La aplicación no compila (el navegador no refleja ningún cambio nuevo): Comprobaremos si 
````bash
ng serve
````
muestra algún error.
