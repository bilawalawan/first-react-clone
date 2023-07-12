import Button from "./Button"

function Productcard(img) {
    return (
        <div class="Oranges">
            <div class="about-detail">
                <h3>Best Fresh Oranges</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat error, quia voluptatibus velit
                    necessitatibus eligendi dolor labore dicta distinctio vitae voluptates !</p>
                <div class="buttons-3">
                    <Button title="BUY NOW"></Button>

                </div>
            </div>
            <div class="or-img">
                <img src={img.src} alt="" />
            </div>
        </div>
    )
}

export default Productcard