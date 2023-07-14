import Footercontent from "../Footercontent/footercontent";
import Sociallinks from "../Sociallinks/Sociallinks";
import logo from "../../assets/logo.png"
import footer1 from "../../assets/footer1-img.png"
import footer2 from "../../assets/footer2-img.png"

function Footer() {
    return (
        <footer className="footer section">
            <div className="footer__container container grid">
                <div className="footer__content">
                    <a href="#" className="footer__logo">
                        <img src={logo} alt="" className="footer__logo-img" />
                        Halloween
                    </a>

                    <p className="footer__description">Enjoy the scariest night <br /> of your life.</p>

                    <Sociallinks />
                </div>

                <Footercontent title="About" link1="About us" link2="Feature" link3="News" />
                <Footercontent title="Our Services" link1="Pricing" link2="Discount" link3="Shiping Mode"  />
                <Footercontent title="Our Company" link1="blog" link2="About us" link3="Our mission"  />


            </div>

            <span className="footer__copy">&#169; Bedimcode. All rigths reserved</span>

            <img src={footer1} alt="" className="footer__img-one" />
            <img src={footer2} alt="" className="footer__img-two" />
        </footer>

    )
}

export default Footer;