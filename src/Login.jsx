import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validarDatos = (e) => {
        e.preventDefault();

        if (email === "" || password === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        alert("¡Inicio de sesión exitoso!");
    };

    return (
        <main id="login" className="container formulario-container">
            <form className="formulario" onSubmit={validarDatos}>
                <h2>Login</h2>

                <label htmlFor="login-email">Email</label>
                <input
                    id="login-email"
                    type="email"
                    className="form-control mb-3"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="login-password">Password</label>
                <input
                    id="login-password"
                    type="password"
                    className="form-control mb-3"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="btn btn-primary" type="submit">Login</button>
            </form>
        </main>
    );
};

export default Login;
