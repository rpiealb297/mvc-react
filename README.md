# Ejemplo de una aplicación de React

Este es un ejemplo de una aplicación de React, solamente con FINES EDUCATIVOS.

## Características

- **Acceso a una API externa**: Se prepara un servicio para un acceso a una api externa.
- **MVC**: Visualiza el patrón de diseño MVC en React con acceso a API y creación de Entidades.

## Cómo Empezar

Para comenzar a usarlo, sigue estos pasos:

1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Inicia el servidor con `npm start`.

## Patrones de diseño

En esta aplicación encontramos una variación del patrón de diseño clásico, conocido como 
[MVC](https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador) (Modelo, vista y controlador). 

Este diseño es utilizado para separar códigos de diferentes naturaleza en la fuente y permitir tener un código más limpio. 

- **Modelo (Model)**:
  - Representa los datos y la lógica de negocio de la aplicación.
  - Es responsable de la manipulación y el acceso a los datos.
  - No tiene conocimiento de la interfaz de usuario.
  - En este caso, lo tenemos dividido en dos partes, la primera son las entidades de datos utiliza el patrón [ DTO](https://es.wikipedia.org/wiki/Objeto_de_transferencia_de_datos) se encuentra en la carpeta `models` y son `campaign.js` y `property.js`, y la segunda es el servicio de acceso a datos que lo encuentras en la carpeta `services` en el fichero `apiService.js` que realiza el acceso a la API y enlaza cada propiedad con la entidad que se va a utilizar en el resto de la app.

- **Vista (View)**:
  - Es la interfaz de usuario que presenta los datos al usuario.
  - No realiza operaciones directas sobre los datos, simplemente muestra la información proporcionada por el controlador o el modelo.
  - En este caso, no la encontramos fuera del controlador, sino que el controlador, que es el componente, prepara la vista para mostrarlo.

- **Controlador (Controller)**:
  - Actúa como intermediario entre el modelo y la vista.
  - Recibe las interacciones del usuario desde la vista y las traduce en acciones que afectan al modelo o la vista.
  - Actualiza la vista con los cambios en el modelo.
  - En este caso, el controlador es el componente en sí. Cada componente utiliza un modelo para poder rellenar sus datos. Lo encontramos en la carpeta `components` en el fichero `PropertiesList.js`

## Cómo configurarlo

La aplicación tiene una carpeta llamada: `api`, en esta carpeta hay un código `php` que permite probar el código react sin necesidad de crear una api para ello. Pero se puede realizar siempre que la api devuelva dos tipo de json:

1. `Propiedades`: Debe de tener los campos: id, name, address, campaign_id
2. `Campaña`: Debe de tener los campos: id, name, isActivated

Una vez tengas la api preparada, hay que configurar el fichero: `config.js` que se encuentra en el directorio raiz.

Esta carpeta te permite configurar el acceso a la api, dependiendo de si está en producción o en desarrollo.

Si ejecutas el código para desarrollo: `development` podrás encontrar que en `config.js` tienes un apartado:
```javascript
development: {
      apiUrl: 'http://localhost/api',
},
```
Sustituye `http://localhost/api` por la URL de la API que estés utilizando.

Cuando compiles el código con `npm build` la aplicación recogerá la URL de la api que está marcada como production:
```javascript
production: {
      apiUrl: 'https://prod.api.com',
}
```

## Cómo ejecutar la app

En el directorio del proyecto:

### `npm start`

Esto ejecutará la aplicación en modo desarrollo. \
Abre [http://localhost:3000](http://localhost:3000) para visualizar la app en tu navegador.

La página se recargará cuando hagas cambios.\
Tú tambien puedes ver los errores en la consola.

### `npm run build`

Construye la aplicación y la prepara para producción, guardando los compilados en la carpeta `build`.\

Incluye React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

El compilado es minificado y los ficheros incluyen los hashes.\
La aplicación estará lista y preparada para ser desplegada!

Para más información echa un vistazo a [deployment](https://facebook.github.io/create-react-app/docs/deployment)
