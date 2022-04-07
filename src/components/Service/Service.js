import img from './service.png'
import img2 from './service2.png'
import './service.css'

const Service = () => {
    return (
        <section className="service">
            <div className="container">
                <h2 className="service__title">
                    services
                </h2>
                <p className="service__text">
                    This is some text inside of a div block.
                </p>
                <div className="service__row">
                    <div className="service__card">
                        <img src={img} alt="img" className="service__card-img"/>
                        <h3 className="service__card-title">
                            SERVICES one
                        </h3>
                        <p className="service__card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                            enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Suspendisse varius.
                        </p>
                        <button className="service__card-btn" type="button">
                            Learn more
                        </button>
                    </div>
                    <div className="service__card">
                        <img src={img2} alt="img" className="service__card-img"/>
                        <h3 className="service__card-title">
                            SERVICES one
                        </h3>
                        <p className="service__card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                            enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Suspendisse varius.
                        </p>
                        <button className="service__card-btn" type="button">
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;