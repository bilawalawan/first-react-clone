import Services from "./Services";
import Button from "./Button";
import Productcard from "./Productcard";
import orange from "../assets/orange.png"
import grapes from "../assets/grapes.png"
import guava from "../assets/gauva.png"
import Testimonial from "./Testimonial";
import Contactform from "./Contactform";
import Footer from "./Footer";


function Mainbody() {
    return (
        <div className="container">
            <Services />
            <Button title="Read More" />
            <div className="services">
                <h1 >Fresh Fruirts</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amazing type of the this type</p>
            </div>
            <Productcard src ={orange}/>
            <Productcard src ={grapes}/>
            <Productcard src ={guava}/>
            <Testimonial/>
            <Contactform/>
            <Footer/>

        </div>
    )
}

export default Mainbody;