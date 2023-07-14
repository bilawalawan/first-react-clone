import Categorydata from "../categorydata/Categorydata";
import categoryimg1 from "../../assets/category1-img.png"
import categoryimg2 from "../../assets/category2-img.png"
import categoryimg3 from "../../assets/category3-img.png"


function Category() {
    return(
        <section className="section category">
                <h2 className="section__title">Favorite Scare <br/> Category</h2>

                <div className="category__container container grid">
                    
                    <Categorydata src={categoryimg1} title="Ghost" des="Choose the ghosts, the scariest there are"/>
                    <Categorydata src={categoryimg2} title="Pumpking" des="You look at the scariest pumpkins there is."/>
                    <Categorydata src={categoryimg3} title="Witch Hat" des="Pick the most stylish witch hats out there."/>
                    
                </div>
            </section>
    )
}

export default Category