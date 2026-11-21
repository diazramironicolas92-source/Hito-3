import { useState } from "react";
import { pizzaCart } from "./pizzas";


const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);

    const aumentarCantidad = (pizza) => {
        const nuevoCart = cart.map((item) =>
            item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        );
        setCart(nuevoCart);
    };

    const disminuirCantidad = (pizza) => {
        const nuevoCart = cart
            .map((item) =>
                item.id === pizza.id ? { ...item, count: item.count - 1 } : item
            )
            .filter((item) => item.count > 0);
        setCart(nuevoCart);
    };

    const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

    return (
        <main className="container cart-container">
            <h4 className="mb-4">Detalles del pedido:</h4>
            {cart.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <div>
                    {cart.map((pizza) => (
                        <div className="cart-item" key={pizza.id}>
                            <img src={pizza.img} alt={pizza.name} />
                            <span className="cart-name text-capitalize">{pizza.name}</span>
                            <span className="cart-price">${pizza.price.toLocaleString("es-AR")}</span>
                            <button className="btn btn-outline-danger btn-sm" type="button" onClick={() => disminuirCantidad(pizza)}>-</button>
                            <span className="cart-quantity">{pizza.count}</span>
                            <button className="btn btn-outline-primary btn-sm" type="button" onClick={() => aumentarCantidad(pizza)}>+</button>
                        </div>
                    ))}
                </div>
            )}
            <h3 className="cart-total">Total: ${total.toLocaleString("es-AR")}</h3>
            <button className="btn btn-dark" type="button">Pagar</button>
        </main>
    );
};


export default Cart;
