# links
-template login
https://bootsnipp.com/snippets/dldxB

-template loading
https://www.digitalocean.com/community/tutorials/angular-custom-loading-screen

-template dashboard
https://startbootstrap.com/theme/sb-admin-2


# music-app
App con MEAN Stack 

# NodeJS
https://nodejs.org/es/

```
node -v
npm -v 
``` 

# MongoDB 

https://www.mongodb.com/es

Crear el directorio C:/data/db para archivos de Mongo 
mongodbd.exe para levantar el servicio de mongo
mongodb.exe para abrir la consola de consultas 

```
# Mostrar bases de datos
show dbs

# Crear y usar una base de datos
use curso_node_angular

# Añadir un registro a un fichero de mongo 
db.bookmarks.save({id: 1, tittle: 'titulo', foo: 'bar'})

# Mostrar el contenido de un fichero de mongo
db.bookmarks.find()
```

# Instalar el proyecto 

```
# Iniciar el proyecto
npm init

# Instalar una dependencia
npm install express --save 

# Instalar una dependecia solo para el entorno de desarrollo 
npm install nodemon --save-dev 

# Desinstalar una dependencia 
npm uninstall express --save

# Instalar todas las dependencias
npm install 
``` 

# Crear la base de datos
Desde la consola de mongo.exe
```
# Crear la base de datos
use music_app

# Insertar un registro en la tabla de artistas
db.artists.save({ name: 'Delafuente', description: 'Musica urbana', imagen: null });

# Mostrar el contenido de la tabla de artistas
db.artists.find();

# Buscar un _id en la tabla de artistas
db.artists.find({"_id": ObjectId("5f3c492349033231787cc8bd")});

# Eliminar un objeto de una coleccion por su _id
db.artists.remove({"_id": ObjectId("5f691dd01f4c921430d386af")});
```


# Angular
```
# Instalar angular-cli
npm install -g @angular/cli

# Lista de comandos de angular 
ng help

# Crear un proyecto base y ponerlo a disposicion por el puerto 4200 
ng new my-fisrt-proyect 
cd my-fisrt-proyect 
ng serve // npm start 

# Generar componentes, servicios...
ng generate <type> 
``` 


# MEAN boilerplate

Proyecto base con MEAN stack (MongoDB, Express, Angular y Nodejs), contiene gestión de usuarios y dashboard


## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

* [git](https://git-scm.com/)
* [Nodejs](https://nodejs.org/es/)
* [MongoDB](https://www.mongodb.com/es)

- Windows
Crear el directorio **C:/data/db**
Levantar el servicio **mongod.exe**
**mongod.exe** para consola de consulta MongoDB

* [Angular](https://angular.io/)
```sh
npm install -g @angular/cli
```

### Instalación 🔧

Copiar el repositorio
```sh
git clone git@github.com:RgmDev/mean-boilerplate.git
```

Iniciar el api
```sh
cd api
cpm install
npm start
```

Inciar el front
```sh
cd client
npm install 
npm start
```

Acceder al navegador http://localhost:4200

## Ejecutando las pruebas ⚙️

localhost:4200

_Explica como ejecutar las pruebas automatizadas para este sistema_

### Analice las pruebas end-to-end 🔩

¿????

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

### Y las pruebas de estilo de codificación ⌨️

¿???

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

## Despliegue 📦

git push 
git pull

_Agrega notas adicionales sobre como hacer deploy_

## Construido con 🛠️

* [Nodejs](https://nodejs.org/es/) - Lenguaje de programación back-end
* [MongoDB](https://www.mongodb.com/es) - Base de datos no relacional
* [Angular](https://angular.io/) - Framework para crear y mantener aplicaciones web
* [Visual Studio](https://visualstudio.microsoft.com/es/) - Entorno de desarrollo integrado
* [Postman](https://www.postman.com/) - permite diseñar, probar y monitorizar servicios REST

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)

## Versionado 📌

Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Rubén González Martín** - *Trabajo Inicial* - [RgmDev](https://github.com/RgmDev)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.



---
⌨️ con ❤️ por [rugo](https://github.com/RgmDev)





# Dillinger

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Dillinger is a cloud-enabled, mobile-ready, offline-storage, AngularJS powered HTML5 Markdown editor.

  - Type some Markdown on the left
  - See HTML in the right
  - Magic

# New Features!

  - Import a HTML file and watch it magically convert to Markdown
  - Drag and drop images (requires your Dropbox account be linked)


You can also:
  - Import and save files from GitHub, Dropbox, Google Drive and One Drive
  - Drag and drop markdown and HTML files into Dillinger
  - Export documents as Markdown, HTML and PDF

Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

### Tech

Dillinger uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Ace Editor] - awesome web-based text editor
* [markdown-it] - Markdown parser done right. Fast and easy to extend.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Gulp] - the streaming build system
* [Breakdance](https://breakdance.github.io/breakdance/) - HTML to Markdown converter
* [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd dillinger
$ npm install -d
$ node app
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

### Plugins

Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| GitHub | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |


### Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```

Second Tab:
```sh
$ gulp watch
```

(optional) Third:
```sh
$ karma test
```
#### Building for source
For production release:
```sh
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```sh
$ gulp build dist --prod
```
### Docker
Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd dillinger
docker build -t joemccann/dillinger:${package.json.version} .
```
This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart="always" <youruser>/dillinger:${package.json.version}
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8000
```

#### Kubernetes + Google Cloud

See [KUBERNETES.md](https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md)


### Todos

 - Write MORE Tests
 - Add Night Mode

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>

