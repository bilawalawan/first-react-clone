

function Categorydata(categoryimg) {
    return (
        <div className="category__data">
            <img src={categoryimg.src} alt="" className="category__img"/>
                <h3 className="category__title">{categoryimg.title}</h3>
                <p className="category__description">{categoryimg.des}</p>
        </div>
    )
}

export default Categorydata;