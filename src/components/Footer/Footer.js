import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="tooter__content">
                        <ul className="footer__list">
                            <h2 className="footer__title">
                                useful links
                            </h2>
                            <li className="footer__list-item">
                                <a href="#" className="footer__link">
                                    Phasellus gravida semper nisi
                                </a>
                            </li>
                            <li className="footer__list-item">
                                <a href="#" className="footer__link">
                                    Suspendisse nisl elit
                                </a>
                            </li>
                            <li className="footer__list-item">
                                <a href="#" className="footer__link">
                                    Dellentesque habitant morbi
                                </a>
                            </li>
                            <li className="footer__list-item">
                                <a href="#" className="footer__link">
                                    Dellentesque habitant morbi
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="tooter__content">
                        <ul className="footer__list">
                            <h2 className="footer__title">
                                social
                            </h2>
                            <li className="footer__list-item">
                                <span>
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4667 4.40008C17.4667 4.53342 17.4667 4.73341 17.4667 4.86675C17.4667 9.86675 13.6667 15.6001 6.73335 15.6001C4.60002 15.6001 2.60002 15.0001 0.93335 13.9334C1.20002 13.9334 1.53335 14.0001 1.86668 14.0001C3.66668 14.0001 5.26668 13.4001 6.53335 12.4001C4.86668 12.4001 3.46668 11.2667 3.00002 9.80008C3.20002 9.86675 3.46668 9.86675 3.73335 9.86675C4.06668 9.86675 4.40002 9.80008 4.73335 9.73342C3.00002 9.33342 1.66668 7.80008 1.66668 6.00008C1.66668 6.00008 1.66668 6.00008 1.66668 5.93341C2.20002 6.20008 2.73335 6.40008 3.40002 6.40008C2.40002 5.73342 1.73335 4.60008 1.73335 3.26675C1.73335 2.60008 1.93335 1.93341 2.26668 1.40008C4.13335 3.66675 6.93335 5.20008 10.0667 5.33341C10 5.06675 10 4.80008 10 4.46675C10 2.40008 11.6667 0.666748 13.8 0.666748C14.8667 0.666748 15.8667 1.13341 16.5333 1.86675C17.4 1.66675 18.2 1.40008 18.9334 0.933415C18.6667 1.80008 18.0667 2.53341 17.2667 3.00008C17.9334 2.93341 18.6667 2.73341 19.3334 2.46675C18.8 3.20008 18.2 3.86675 17.4667 4.40008Z" fill="black"/>
</svg>

                                </span>
                                <a href="#" className="footer__link">
                                    Twitter
                                </a>
                            </li>
                            <li className="footer__list-item">
                                <i className="fab fa-facebook-f"></i>
                                <a href="#" className="footer__link">
                                    Facebook
                                </a>
                            </li>
                            <li className="footer__list-item">
                                <i className="fab fa-pinterest-p"></i>
                                <a href="#" className="footer__link">
                                    Pinterest
                                </a>
                            </li>
                            <li className="footer__list-item">
                                <i className="fab fa-google"></i>
                                <a href="#" className="footer__link">
                                    Google
                                </a>
                            </li>
                            <li className="footer__list-item">
                                <i className="fab fa-instagram"></i>
                                <a href="#" className="footer__link">
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                Copyright Velocity Inc. Made in Webflow.
            </div>
        </footer>
    );
};

export default Footer;