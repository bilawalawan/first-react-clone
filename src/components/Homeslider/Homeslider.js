import Slider from "../Slider/Slider";
import slide1 from "../../assets/home1-img.png"
import slide2 from "../../assets/home2-img.png"
import slide3 from "../../assets/home1-img.png"


function Homeslider() {
    return(
        <section className="home container" id="home">
                <div className="swiper home-swiper">
                    <div className="swiper-wrapper">
                       <Slider src={slide1}/>
                       <Slider src={slide2}/>
                       <Slider src={slide3}/>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>
    )
}

export default Homeslider;