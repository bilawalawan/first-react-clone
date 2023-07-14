
function Trickcard(data1) {
    return (
        <div className="trick__content">
            <img src={data1.src} alt="" className="trick__img" />
            <h3 className="trick__title">{data1.h3title}</h3>
            <span className="trick__subtitle">{data1.spantitle}</span>
            <span className="trick__price">${data1.price}</span>
            <button className="button trick__button">
                <i className='bx bx-cart-alt trick__icon'></i>
            </button>
        </div>
    )
}

export default Trickcard;