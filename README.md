# Documentación de la aplicación

## Deploy

---

_Se puede visualizar desde el siguiente enlace:_

- https://electroapp.netlify.app/

## Descripción del proyecto

---

E-commerce en el cual se simula la venta de productos electrónicos.

La navegación incluye:

- Home con productos
- Pantalla de login / inicio de sesion
- Pantalla de signup / registro
- Pantalla de categorías
- Pantalla de producto con detalle
- Pantalla de carrito
- Pantalla de checkout

## Detalles del proyecto

---

Se cuenta con una barra de navegacion con tres categorias de productos, que son cargadas desde la base de datos de firestore. A su vez se cuenta con un icono para acceder a la pantalla de login. Desde esta última también se puede ir a la pantalla de registro para crear una cuenta nueva.

Desde el home tenemos una lista de todos los productos, donde el usuario puede ver el detalle de cada uno de ellos al seleccionarlos. Éste puede agregar un producto al carrito desde la vista de detalle del producto.

En la pantalla de carrito podrá ver sus productos seleccionados en un formato compacto y detallado, con el precio total.

En la pantalla de checkout se podra finalizar la compra tanto como usuario registrado y logueado, donde se utiliza el mail del usuario, o como "compra rapida", es decir sin estar registrado donde se debe repetir dos veces el email.

Una vez realizada la compra se le entrega al usuario un número de orden/pedido.

## Tecnologías utilizadas

---

- Interfaz realizada con ReactJS - Create React App
- Ruteo con React Router Dom
- Estilos con CSS
- Base de datos con Firebase
- Toastify para las notificaciones
  - react: "18.1.0"
  - react-dom: "18.1.0"
  - react-router-dom: "6.3.0"
  - react-scripts: "5.0.1"
  - react-toastify: "9.0.7"
  - firebase: "9.8.4"

## Uso e instalación

---

1. Abrir la consola, copiar y pegar la siguiente linea, descargará el repositorio del proyecto en la carpeta donde se haya ejecutado.

```
git clone https://github.com/NachoJ12/ecommerce-app.git
```

2. Posicionado dentro la carpeta creada en el paso anterior, usar npm i para instalar las dependencias necesarias.

```
$ npm install
```

3. Una vez completo el paso anterior, ejecutar el siguiente codigo en la consola:

```
$ npm start
```

## Gif

---

![Presentacion proyecto](https://media.giphy.com/media/oJHhbwQQa12czkAn35/giphy.gif)

## Video de la app

---

[Youtube ElectroApp](https://youtu.be/1HpOMVisWEU)

## Contacto

---

- **LinkedIn:** https://www.linkedin.com/in/nachojustel/
- **GitHub:** https://github.com/NachoJ12
