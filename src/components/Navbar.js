import logo from '../assets/logo.png';
import Button from "./Button";
import slideImg from '../assets/slide-img.png'
import searchIcon from '../assets/search-icon (1).png'


function Navbar() {
    return (
        <div className="my-navbar">
            <nav>
                <div className="left-side">
                    <img src={logo} alt="" />
                    <p> TROPIKO </p>

                </div>
                <div className="right-side">
                    <div className="navbar-list">
                        <ul>
                            <li>Home</li>
                            <li>Fruit</li>
                            <li>Services</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className="navbar-button">
                        <img src={searchIcon} alt="" />
                        <Button title="Sign Up" />
                    </div>
                </div>
            </nav>
            <div className="main-body">
                <div className="about-detail">
                    <h1>Welcome to Our <br /> Fruit Shop</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Quaerat error, quia voluptatibus velit
                        necessitatibus <br /> eligendi dolor labore dicta distinctio vitae voluptates !</p>
                    <Button title="Read More" />
                    <Button title="Book Now" />
                </div>
                <div className="first-image">
                    <img src={slideImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;