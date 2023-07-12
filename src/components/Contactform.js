import Forms from "./Form"
import dish from "../assets/orange-dish.png"


function Contactform() {
    return(
        <div className="contact-us-form">
            <div className="form-1">
            <h1>Contact Us</h1>
             <Forms/>
        </div>
                <div className="side-img">
                    <img src={dish} width="250px" height="450px"/>
                </div>
            </div>
    )
      
    
}

export default Contactform