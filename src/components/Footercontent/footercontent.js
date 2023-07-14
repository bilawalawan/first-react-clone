
function Footercontent(props) {
    return (
        <div class="footer__content">
            <h3 class="footer__title">{props.title}</h3>

            <ul class="footer__links">
                <li>
                    <a href="#" class="footer__link">{props.link1}</a>
                </li>
                <li>
                    <a href="#" class="footer__link">{props.link2}</a>
                </li>
                <li>
                    <a href="#" class="footer__link">{props.link3}</a>
                </li>
            </ul>
        </div>

    )
}

export default Footercontent;