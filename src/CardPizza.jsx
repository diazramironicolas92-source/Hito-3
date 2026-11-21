const CardPizza = ({ name, price, ingredients, img, desc }) => {
    return (
        <div className="card h-100 shadow-sm">
            <img
                src={img}
                className="card-img-top"
                alt={`Pizza ${name}`}
            />
            <div className="card-body text-center">
                <h5 className="card-title text-capitalize">Pizza {name}</h5>
                <p className="text-secondary">{desc}</p>
                <hr />
                <p className="text-secondary mb-2">Ingredientes:</p>
                <ul className="list-unstyled">
                    {ingredients.map((ingrediente, index) => (
                        <li key={index}>🍕 {ingrediente}</li>
                    ))}
                </ul>
                <hr />
                <h5>Precio: ${price.toLocaleString("es-AR")}</h5>
                <div className="d-flex justify-content-around mt-3">
                    <button className="btn btn-outline-secondary btn-sm" type="button">
                        Ver Más »
                    </button>
                    <button className="btn btn-dark btn-sm" type="button">
                        Añadir 🛒
                    </button>
                </div>
            </div>
        </div>
    );
};


export default CardPizza;
