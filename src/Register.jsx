import { useState } from "react";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmarPassword, setConfirmarPassword] = useState("");

    const validarDatos = (e) => {
        e.preventDefault();

        if (email === "" || password === "" || confirmarPassword === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        if (password !== confirmarPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        alert("¡Registro exitoso!");
    };

    return (
        <main id="register" className="container formulario-container">
            <form className="formulario" onSubmit={validarDatos}>
                <h2>Register</h2>

                <label htmlFor="register-email">Email</label>
                <input
                    id="register-email"
                    type="email"
                    className="form-control mb-3"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="register-password">Password</label>
                <input
                    id="register-password"
                    type="password"
                    className="form-control mb-3"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label htmlFor="register-confirmar">Confirm Password</label>
                <input
                    id="register-confirmar"
                    type="password"
                    className="form-control mb-3"
                    placeholder="Confirm your password"
                    value={confirmarPassword}
                    onChange={(e) => setConfirmarPassword(e.target.value)}
                />

                <button className="btn btn-primary" type="submit">Register</button>
            </form>
        </main>
    );
};

export default Register;
