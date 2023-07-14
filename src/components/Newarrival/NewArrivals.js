import Newproduct from "../Newproduct/Newproduct";
import new1 from "../../assets/new1-img.png"
import new2 from "../../assets/new2-img.png"
import new3 from "../../assets/new3-img.png"
import new4 from "../../assets/new4-img.png"
import new5 from "../../assets/new5-img.png"
import new6 from "../../assets/new6-img.png"

function NewArrival() {
    return (
        <section className="section new" id="new">
            <h2 className="section__title">New Arrivals</h2>

            <div className="new__container container">
                <div className="swiper new-swiper">
                    <div className="swiper-wrapper">
                        <Newproduct src={new1} title="Haunted House" subtitle="Accessory" newprice="14.99" discount="12.99" />
                        <Newproduct src={new2} title="Halloween Candle" subtitle="Accessory" newprice="11.99" discount="21.99" />
                        <Newproduct src={new3} title="Witch Hat" subtitle="Accessory" newprice="16.99" discount="32.99" />
                        <Newproduct src={new4} title="Rip" subtitle="Accessory" newprice="11.99" discount="22.99" />
                        <Newproduct src={new5} title="Terrifying Crystal Ball" subtitle="Accessory" newprice="6.99" discount="34.99" />
                        <Newproduct src={new6} title="Witch Broom" subtitle="Accessory" newprice="5.99" discount="10.99" />
                    

                   
                    </div>
                </div>
            </div>
        </section>
    )


}

export default NewArrival;