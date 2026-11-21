import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "./pizzas";


const Home = () => {
    return (
        <>
            <section id="home">
                <Header />
                <div className="container my-4">
                    <div className="row g-3">
                        {pizzas.map((pizza) => (
                            <div className="col-12 col-md-4" key={pizza.id}>
                                <CardPizza
                                    name={pizza.name}
                                    price={pizza.price}
                                    ingredients={pizza.ingredients}
                                    img={pizza.img}
                                    desc={pizza.desc}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};


export default Home;
