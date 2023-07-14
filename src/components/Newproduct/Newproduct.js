
function Newproduct(para) {
    return (
        <div className="new__content swiper-slide">
            <div className="new__tag">New</div>
            <img src={para.src} alt="" className="new__img"/>
                <h3 className="new__title">{para.title}</h3>
                <span className="new__subtitle">{para.subtitle}</span>

                <div className="new__prices">
                    <span className="new__price">${para.newprice}</span>
                    <span className="new__discount">${para.discount}</span>
                </div>

                <button className="button new__button">
                    <i className='bx bx-cart-alt new__icon'></i>
                </button>
        </div>
    )
}

export default Newproduct;