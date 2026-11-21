const Navbar = () => {
    const total = 25000;

    return (
        <nav className="navbar navbar-dark bg-dark px-3">
            <div className="container-fluid">
                <span className="navbar-brand">
                    Pizzería Mamma Mía!
                </span>

                <div className="d-flex gap-2 flex-wrap">
                    <a className="btn btn-outline-light btn-sm" href="#home">
                        🏠 Home
                    </a>

                    <a className="btn btn-outline-light btn-sm" href="#login">
                        🔐 Login
                    </a>

                    <a className="btn btn-outline-light btn-sm" href="#register">
                        📝 Register
                    </a>

                    <button className="btn btn-info btn-sm" type="button">
                        🛒 Total: ${total}
                    </button>
                </div>
            </div>
        </nav>
    );
};


export default Navbar;
