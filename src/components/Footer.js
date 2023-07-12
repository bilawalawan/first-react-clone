import Sociallinks from "./Sociallink";


function Footer() {
    return(
        <div>
        <footer className="foot">
            <div className="fruit-item">
                <h4>Fruits</h4>
                <p>Lorem, <br/> ipsum dolor <br/> amet consectetur <br/> adipisicing elit. <br/> Consectetur ad <br/>nam
                    laborum <br/> magni laudantium <br/>
                    eius tempora neque voluptates error! </p>
            </div>
            <div className="services-provide">
                <h4>Services</h4>
                <p>Lorem, <br/> ipsum dolor <br/> amet consectetur <br/> adipisicing elit. <br/> Consectetur ad <br/>nam
                    laborum <br/> magni laudantium <br/></p>
            </div>
            <div className="list-item">
                <h4>List</h4>
                <p>Lorem, <br/> ipsum dolor <br/> amet consectetur <br/> adipisicing elit. <br/> Consectetur ad <br/>nam
                    laborum <br/> magni laudantium <br/> </p>
            </div>
            <Sociallinks/>
        </footer>
        
    
    <footer className="second">
        <p>Copywrite @ all right resevred by Bilawal Awan</p>
    </footer>
    </div>
    )
}

export default Footer;