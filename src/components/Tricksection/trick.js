import Trickcard from "../Trickcard/Trickcard";
import tricardimg1 from "../../assets/trick-treat1-img.png"
import tricardimg2 from "../../assets/trick-treat2-img.png"
import tricardimg3 from "../../assets/trick-treat3-img.png"
import tricardimg4 from "../../assets/trick-treat4-img.png"
import tricardimg5 from "../../assets/trick-treat5-img.png"
import tricardimg6 from "../../assets/trick-treat6-img.png"

function Trickarea() {
    return (
        <section class="section trick" id="trick">
            <h2 class="section__title">Trick Or Treat</h2>

            <div class="trick__container container grid">
                <Trickcard src={tricardimg1} h3title="Toffee" spantitle="Candy" price="11.23" />
                <Trickcard src={tricardimg2} h3title="Bone" spantitle="Accessory" price="19.23" />
                <Trickcard src={tricardimg3} h3title="Scarecrow" spantitle="Accessory" price="9.93" />
                <Trickcard src={tricardimg4} h3title="Candy Cane" spantitle="Candy" price="17.99" />
                <Trickcard src={tricardimg5} h3title="Pumpkin" spantitle="Candy" price="5.10" />
                <Trickcard src={tricardimg6} h3title="Ghost" spantitle="Accessory" price="45.12" />
            </div>
        </section>
    )
}

export default Trickarea;