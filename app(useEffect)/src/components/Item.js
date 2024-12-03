import Stars from "./Stars";

function Item(props){
    const {id, image, title, price, rating, deleteProduct} = props
    let stars = []
    for (let i = 0; i < rating; i++) {
        stars.push(true)
    } while(stars.length < 5){
        stars.push(false)
    }

    return(
        <div className="item" onDoubleClick={(e) => deleteProduct(id)}>
            <img src={image} alt={title} className="item_image"/>
            <h3 className="item_name">{title}</h3>
            <p className="item_price">{price}</p>
            <Stars stars={stars} />
        </div>
    );
};

export default Item