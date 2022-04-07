import icon from './icon.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import './inside.css'

const Inside = () => {
    return (
        <section className="inside">
            <div className="container">
                <h2 className="inside__title">
                    what we do
                </h2>
                <p className="inside__text">
                    This is some text inside of a div block.
                </p>
                <div className="inside__row">
                    <div className="inside__card">
                        <img src={icon} alt="icon" className="inside__card-img"/>
                        <h3 className="inside__card-title">
                            Graphic Design
                        </h3>
                        <p className="inside__card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum tristique.
                        </p>
                    </div>
                    <div className="inside__card">
                        <img src={icon2} alt="icon" className="inside__card-img"/>
                        <h3 className="inside__card-title">
                            Graphic Design
                        </h3>
                        <p className="inside__card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum tristique.
                        </p>
                    </div>
                    <div className="inside__card">
                        <img src={icon3} alt="icon" className="inside__card-img"/>
                        <h3 className="inside__card-title">
                            Graphic Design
                        </h3>
                        <p className="inside__card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum tristique.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Inside;