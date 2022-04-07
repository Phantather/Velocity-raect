import './home.css'

const Home = () => {
    return (
        <section className="home">
            <div className="container">
                <div className="home__content">
                    <h2 className="home__title">
                        This is Velocity
                    </h2>
                    <div className="home__btns">
                        <button className="button home__btn" type="button">
                            sign up
                        </button>
                        <button className="button home__btn" type="button">
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;