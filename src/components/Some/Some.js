import img from './image.png'
import './some.css'

const Some = () => {
    return (
        <section className="some">
            <div className="container">
                <h2 className="some__title">
                    Tab Section
                </h2>
                <p className="some__text">
                    This is some text inside of a div block.
                </p>
                <ul className="some__tabs">
                    <li className="some__tabs-item">
                        Tab Button 1
                    </li>
                    <li className="some__tabs-item">
                        Tab Button 1
                    </li>
                    <li className="some__tabs-item">
                        Tab Button 1
                    </li>
                </ul>
                <div className="some__content">
                    <img src={img} alt="img" className="some__content-ing"/>
                </div>
            </div>
        </section>
    );
};

export default Some;