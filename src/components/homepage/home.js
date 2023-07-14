import About from "../About/About";
import Discount from "../Discount/Discount";
import Footer from "../Footer/Footer";
import Homeslider from "../Homeslider/Homeslider";
import Navbar from "../Navbar/Navbar";
import NewArrival from "../Newarrival/NewArrivals";
import Newsletter from "../Newsletter/Newsletter";
import Trickarea from "../Tricksection/trick";
import Category from "../category/Category";


function Homepage() {
    return(
        <div>
            
            <Navbar/>
            <main class="main">
                <Homeslider/>
                <Category/>
                <About/>
                <Trickarea/>
                <Discount/>
                <NewArrival/>
                <Newsletter/>
                <Footer/>
            </main>
        </div>
    )
}

export default Homepage;