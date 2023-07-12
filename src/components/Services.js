import Servicescard from "./Servicecard";
import Cardimg1 from '../assets/card-item-1.png'
import Cardimg2 from '../assets/card-item-2.png'
import Cardimg3 from '../assets/card-item-3.png'

function Services() {
    return(
        <div>
            <div className="services">
            <h1>Our Services</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amazing type of the this type</p>
        </div>
        <div className="cards">
            
            <Servicescard src={Cardimg1}/>
            <Servicescard src={Cardimg2}/>
            <Servicescard src={Cardimg3}/>
        </div>
        </div>
    )
}

export default Services