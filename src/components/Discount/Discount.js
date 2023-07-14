import Button from "../Button/Button";
import discountimg from "../../assets/discount-img.png"

function Discount() {
    return(
        <section className="section discount">
                <div className="discount__container container grid">
                    <div className="discount__data">
                        <h2 className="discount__title">50% Discount <br/> On New Products</h2>
                       <Button title="Go to New"></Button>
                    </div>

                    <img src={discountimg} alt="" className="discount__img"/>
                </div>
            </section>
    )
}

export default Discount