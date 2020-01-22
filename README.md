# Corebiz Restaurante - Log

Hola, aqui voy a explicar como he trabajado en el landing page,
desde que lo recibi hasta el despliegue. <br/>
Incluyendo todos los problemas que tuve y como los resolvi.
Al final del documento estan las instrucciones de como ejecutar el proyecto en local.

# 1 - Maquetacion inicial

Primero, despues de recibir la maqueta, la abrí en figma y la revise completa.<br/>
Más o menos me di una idea de como la podria hacer y que iba a necesitar. <br/>
Decidí que iba a usar [Gatsby](https://www.gatsbyjs.org/) Framework de React para páginas estáticas.

### Hice el proyecto en Gatsby con:

```
gatsby new restaurante
```

Esto es el equivalente en Gatsby aÑ

```
npx create-react-app
```

Abri el proyecto en Vim y comence a maquetar el HTML, empezando por la portada y en orden hasta el footer. <br/>
Aqui tuve bastantes problemas para importar Bootstrapp en Gatsby. Al final los resolvi usando el plugin gatsby-Helmet, que añade
una forma sencilla de acceder a los elementos head en el HTML.<br/>
Esto esta en el archivo /src/layouts/Layout <br/>
En este archivo hay una pequeña llamada GraphQL a la meta informacion del sitio, nada muy impresionante, pero Gatsby facilita la carga de contenido dinamico mediante graphql. <br/>
Aun y con el plugin Gatsby se quejaba de que no podia cargar bien los scripts necesarios para bootstrap (jQuery) asi que tuve que importarlos de manera estatica.<br/>

# 2 - HTML

Una vez resueltos los problemas con Bootstrap y el importado de scripts, hice todo el DOM en HTML en un solo archivo. <br/>
Voy seccion por seccion, reutilizando codigo y haciendo pequeños ajustes en CSS para facilitar el trabajo posterior. <br/>
Esta primera pasada es simplemente tener toda la estructura basica del sitio para despues ajustar los detalles. <br/>

# 3 - Segunda vuelta HTML

En esta segunda vuelta, una vez teniendo todos los elementos HTMl en su sitio, la hago para ajustar todo lo que falte. <br/>
Tamaño de los textos, botones, colores y demas. Los ajusto hasta tenerlos igual que en figma. <br/>
Los mayores problemas en esta parte los tuve a la hora de colocar los elementos y adivinando el tipo de texto y el tamaño en columnas de los elementos.<br/>
Bootstrap facilita el trabajo de posicionamiento, sin embargo a la hora de hacer el diseño responsivo, los elementos se
suelen descolocar y hay que ser muy especifico con las clases que se usan.

# 4 - Refactor

Despues de tener todo el diseño en un solo archivo, hay que hacerle un refactor para tenerlo en componentes y que sea mas facil de manipular. <br/>
Aqui simplemente agarras partes del codigo, en este caso use secciones y las fui colocando en sus archivos dento de **src/components** para despues llamarlos en el index<br/>

# 5 - Despliegue
Ahora el diseño esta listo y es hora de desplegarlo.
Originalmente lo iba a hacer en Heroku, pero lo cierto es que estuve un par de horas intentándolo y fallé. Investigué un poco y decidí  irme con Netlify.
En Netlify simplemente le indicas que rama en Github va a ir desplegando y cuando haces **git push**, Netlify hace el build y lo despliega. Muy directo.

# 6 - Que seguiria

El sitio ya esta online, pero aun se podria mejorar. <br/>
Algunas ideas que se me ocurren:
* **Usar plugins para cargar las imagenes mas rapido**<br/>
Gatsby tiene una serie de plugins para manipular las imagenes y hacer que carguen solo los tamaños necesarios
* **Mas refactor de los elementos para mas reuso del codigo** <br/>
El codigo esta separado en componentes, pero se podria hacer un refactor en elementos <br/>
Se podrian extraer elementos como el slider para que carguen su contenido por separado y despues importarlos en su seccion.
* **Cargar el contenido de forma dinamica de un CMS, por ejemplo [Strapi](https://strapi.io/)** <br/>
Usando un CMS se podria cargar el contenido mediante GraphQL.
Gatsby facilita mucho este trabajo e incluye una API auto generada de llamadas graphQL.

## Instrucciones
Primero clonamos el repo:
```
git clone git@github.com:albertofcasuso/corebiz_restaurante.git
```

Una vez clonado, instalamos las dependencias con:
```
cd corebiz_restaurante
npm install
```

Cuando las dependencias esten instaladas, podemos ejecutar:
```
gatsby develop
```
y ejecutara el proyecto en [Localhost](http://localhost:8000)
Aqui podemos hacer cambios y se cargaran dinamicamente.
Cuando el desarrollo esta terminado, podemos testear el despliegue con:
```
gatsby build
gatsby serve
```
El primer comando creara una carpeta public, donde esta el proyecto listo para el depliegue.
El segundo lo ejecutara en [Localhost](http://localhost:9000)
Si este par de comandos funciona y el proyecto esta vivo. Esta listo para ser desplegado.