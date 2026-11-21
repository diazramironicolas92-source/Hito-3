# Pizzería Mamma Mía - Hito 3

Proyecto basado en la estructura del Hito 2, con renderización dinámica de pizzas y carrito.

## Ejecutar

1. Abrir la carpeta del proyecto en VS Code.
2. Ejecutar `npm install`.
3. Ejecutar `npm run dev`.

## Hito 3
- `Home.jsx` importa el array `pizzas` desde `pizzas.js`, lo recorre con `map()` y renderiza una tarjeta por pizza.
- `CardPizza.jsx` recibe la información mediante props y recorre los ingredientes para renderizar un `<li>` por ingrediente.
- `Cart.jsx` importa `pizzaCart`, muestra sus pizzas, permite aumentar y disminuir cantidades, elimina una pizza cuando su cantidad llega a 0 y calcula el total.
- En `App.jsx`, `Cart` está activo y `Home`, `Login` y `Register` quedan comentados, según la consigna.
- `pizzas.js` contiene los datos originales de pizzas y carrito proporcionados para el Hito 3.
