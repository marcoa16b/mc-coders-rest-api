# Api de mi Blog personal

Este codigo esta basado en el siguiente video: [Link](https://www.youtube.com/watch?v=OML9f6LXUUs)

---

## Como inicializar el proyecto

Simplemente clonas el repositorio, escribes el comando ``npm install``, seguidamente modificas el archivo ``.env`` y colocas la URL de tu base de datos en MongoDB, una ves hecho esto ejecutas el comando ``npm start`` y se inicializa el servidor.

---

## Informacion sobre el API

### Informacion sobre el Login/Register

* El usuario se puede registrar de la siguiente forma:
  
  * Link: [ POST ] https://mysite.com/api/auth/register
  * Contenido: [ body: row (JSON) ]
    ```JSON
    {
      "username": "myUser",
      "email": "myemail@gmail.com",
      "password": "123456"
    }
    ```
* El usuario puede hacer login de la siguiente manera:
  
  * Link: [ POST ] https://mysite.com/api/auth/login
  * Contenido: [ body: row (JSON) ]
    ```JSON
    {
      "username": "myUser",
      "password": "123456"
    }
    ```

### Informacion sobre el usuario

* Para actualizar la contraseña de un usuario:
  
  * Link: [ PUT ] https://mysite.com/api/users/:id
  * Contenido: [ body: row (JSON) ]
    ```JSON
    {
      "userId": "98646541684964684",
      "username": "myUser",
      "password": "12345678"
    }
    ```
* Para eliminar un usuario:
  
  * Link: [ DELETE ] https://mysite.com/api/users/:id
  * Contenido: [ body: row (JSON) ]
    ```JSON
    {
      "userId": "98646541684964684",
    }
    ``` 

* Para obtener un usuario:
  
  * Link: [ GET ] https://mysite.com/api/users/:id
  * No necesita contenido.

### Informacion sobre los posts

* Para registrar un nuevo post:
  
  * Link: [ POST ] https://mysite.com/api/posts
  * Contenido: [ body: row (JSON) ]
    ```JSON
    {
      "username": "myUser",
      "title": "This is a title",
      "date": "03/05/2022",
      "desc": "This is a description",
      "categories": [music, python],
      "slug": "This-is-a-title"
    }
    ```

* Para actualizar un post:
  
  * Link: [ PUT ] https://mysite.com/api/posts/:id
  * Contenido: [ body: row (JSON) ]
    ```JSON
    {
      "username": "myUser",
      "title": "This is a title",
      "date": "03/05/2022",
      "desc": "This is a description",
      "categories": [music, python],
      "slug": "This-is-a-title"
    }
    ```
  * Solo puedes editar tu propio post.

* Para eliminar un post:
  
  * Link: [ DELETE ] https://mysite.com/api/posts/:id
  * Contenido: [ body: row (JSON) ]
    ```JSON
    {
      "username": "myUser",
    }
    ```
  * Solo puedes eliminar tu propio post.

* Para obtener un solo post:
  
  * Link: [ GET ] https://mysite.com/api/posts/:id
  * No se requiere contenido

* Para obtener todos los post:
  
  * Para obtener todos los posts: 
    * Link: [ GET ] https://mysite.com/api/posts
    * No se requiere contenido
  * Para obtener todos los post de un solo usuario:
    * Link: [ GET ] https://mysite.com/api/posts?user=myUser
    * No se requiere contenido
  * Para obtener todos los post de una categoria especifica:
    * Link: [ GET ] https://mysite.com/api/posts?cat=category
    * No se requiere contenido

### Informacion sobre las categorias

* Para guardar una categoria:
   
  * Link: [ POST ] https://mysite.com/api/categories
  * Contenido: [ body: row (JSON) ]
    ```JSON
    {
      "name": "example1",
    }
    ``` 

* Para obtener las categorías:
   
  * Link: [ GET ] https://mysite.com/api/categories
  * No necesita contenido.

--- 
