# Corebiz Restaurante - Log

Hola, aquí voy a explicar como he trabajado en el landing page,
desde que lo recibí hasta el despliegue. <br/>
Incluyendo todos los problemas que tuve y como los fui resolviendo.
Al final del documento están las instrucciones de como ejecutar el proyecto en local y justo aquí debajo los Links al repo en github, y al despliegue en Netlify.

# LINKS:

- [Repo publico en Github](https://github.com/albertofcasuso/corebiz_restaurante)
- [Despliegue en Netlify](https://agitated-knuth-abfebd.netlify.com/)

# 1 - Maquetación inicial

Primero, después de recibir la maqueta, la abrí en figma y la revise completa.<br/>
Más o menos me di una idea de como la podria hacer y que iba a necesitar. <br/>
Decidí que iba a usar [Gatsby](https://www.gatsbyjs.org/) Framework de React para páginas estáticas junto a bootstrap e iconos de font-awesome (por eso son un poco diferentes a los del diseño) y despliegue en Heroku. 
Apenas estoy experimentando con Gatsby, así que este proyecto es un reto en ese sentido.

Para hacer un proyecto nuevo en Gatsby, simplemente se ejecuta en la terminal:

```
gatsby new restaurante
```

Esto es el equivalente en Gatsby a:

```
npx create-react-app
```

Abrí el proyecto en Vim y comencé a maquetar el HTML, empezando por la portada y en orden hasta el footer. <br/>
aquí tuve bastantes problemas para importar Bootstrapp en Gatsby. Al final los resolví usando el plugin gatsby-Helmet, que añade
una forma sencilla de acceder a los elementos head en el HTML.<br/>
Este Helmet con los imports esta en el archivo **/src/layouts/Layout** <br/>
En este archivo hay una pequeña llamada GraphQL a la meta informacion del sitio, Gatsby facilita la carga de contenido dinámico mediante graphql. <br/>
Aun y con el plugin, Gatsby se quejaba de que no podía cargar bien los scripts necesarios para bootstrap (jQuery) asi que tuve que importarlos de manera estática. Copiándolos directamente al proyecto.<br/>
Resolver estos problemas con los imports me llevo aproximadamente 2 horas.

# 2 - HTML

Una vez resueltos los problemas con Bootstrap y el importado de scripts, hice todo el DOM en HTML en un solo archivo. <br/>
Voy sección por sección, reutilizando código y haciendo pequeños ajustes en CSS para facilitar el trabajo posterior. <br/>
Esta primera pasada es simplemente tener toda la estructura básica del sitio para después ajustar los detalles. <br/>
Esta primera vuelta me llevo aproximadamente 4 horas

# 3 - Segunda vuelta HTML y detalles

En esta segunda vuelta, una vez teniendo todos los elementos HTMl en su sitio, se ajusta todo lo que falte. <br/>
Tamaño de los textos, botones, colores y demás. Los ajusto hasta tenerlos igual que en figma. <br/>
Los mayores problemas en esta parte los tuve a la hora de colocar los elementos y adivinando el tipo de texto y el tamaño en columnas de los elementos.<br/>
Bootstrap facilita el trabajo de posicionamiento, sin embargo a la hora de hacer el diseño responsivo, los elementos se
suelen descolocar y hay que ser muy especifico con las clases que se usan.

# 4 - Refactor

Después de tener todo el diseño en un solo archivo, hay que hacerle un refactor para tenerlo en componentes y que sea mas fácil de manipular. <br/>
aquí simplemente agarras partes del código, en este caso use como base las secciones y las fui colocando en sus archivos dentro de **src/components** para después llamarlos en el index<br/>
También he separado algunos elementos más como el Navbar.
Hacer todo el css, con el refactor me llevo aproximadamente 8 horas.

# 5 - Despliegue

Ahora el diseño esta listo y es hora de desplegarlo.
Originalmente lo iba a hacer en Heroku, pero lo cierto es que estuve un par de horas intentándolo y fallé. Investigué un poco y decidí irme con Netlify.
En Netlify simplemente le indicas qué rama en Github va a ir desplegando y cuando haces **git push**, Netlify hace el build y lo despliega. Basicamente es automático, simplemente se configura github y se despliega solo.
No tuve ningún problema y la página funciona.
En total he invertido unas 14-15 horas en realizar la página

# 6 - Que seguiría

El sitio ya esta online, pero aun hay espacio para la mejora. <br/>
Algunas ideas:

- **Comprimir todas las imágenes a sus tamaños adecuados y agregarlas a un CDN**<br/>
  Si las imágenes tienen el tamaño adecuado y la compresion adecuada, cargaran mucho más rápido.
  También al estar en un CDN, este sirve los tamaños y las compresiones que necesitas, y ahorraría el trabajo manual.
  <br/>
  <br/>
- **Usar plugins para cargar las imágenes mas rápido**<br/>
  Gatsby tiene una serie de plugins para manipular las imágenes y hacer que carguen solo los tamaños necesarios
  Mediante llamadas graphql a los archivos estáticos gatsby sirve las imágenes mas rápido.
  <br/>
  <br/>
- **Mas refactor de los elementos para mas reuso del código**
  El código esta separado en componentes, pero se podría hacer un refactor en elementos <br/>
  Se podrían extraer elementos como el slider para que carguen su contenido por separado y después importarlos en su sección.
  <br/>
  <br/>
- **Cargar el contenido de forma dinámica de un CMS, por ejemplo [Strapi](https://strapi.io/)** <br/>
  Usando un CMS se podría cargar y manipular el contenido mediante GraphQL.
  Gatsby facilita mucho este trabajo e incluye una API auto generada de llamadas graphQL.

# Instrucciones para ejecutar el proyecto en local

Primero clonamos el repo:

```
git clone git@github.com:albertofcasuso/corebiz_restaurante.git
```

Una vez clonado, instalamos las dependencias con:

```
cd corebiz_restaurante
npm install
```

Cuando las dependencias estén instaladas, podemos ejecutar:

```
gatsby develop
```

y ejecutara el proyecto en [Localhost](http://localhost:8000)
aquí podemos hacer cambios y se cargaran dinámicamente.
Cuando el desarrollo esta terminado, podemos testear el despliegue con:

```
gatsby build
gatsby serve
```

El primer comando creara una carpeta public, donde esta el proyecto listo para el depliegue.
El segundo lo ejecutara en [Localhost](http://localhost:9000)
Si este par de comandos funciona y el proyecto esta vivo. Esta listo para ser desplegado.
