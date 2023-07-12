import fblogo from "../assets/fb.png"
import twitter from "../assets/twitter.png"
import linkedin from "../assets/linkedin.png"
import iglogo from "../assets/instagram.png"

function Sociallinks() {
    return(
        <div className="social-link">
                <h4>Follow Us</h4>
                <div className="my-social-link">
                    <div className="facebook">
                        <img src={fblogo} alt=""/>
                    </div>
                    <div className="twitter">
                        <img src={twitter} alt=""/>
                    </div>
                    <div className="instagram">
                        <img src={iglogo} alt=""/>
                    </div>
                    <div className="linkedIn">
                        <img src={linkedin} alt=""/>
                    </div>
                </div>
                <p>Subscribe Now</p>
                <input type="text"/> <br/>
                <button>Subscribe</button>
            </div>
    )
}

export default Sociallinks