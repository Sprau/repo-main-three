import { useEffect, useState } from "react";
import Item from "./Item";

function List() {
    const [products, setProducts] = useState([]);

    function deleteProduct(id) {
        setProducts(products.filter(product => product.id !== id));
    }

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => setProducts(data.products))
            .catch(error => console.error("Error fetching products:", error)); 
    }, []);

    return (
        <div className="list">
            {products.length > 0 ? (
                products.map(product => (
                    <Item 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        image={product.thumbnail}
                        price={product.price + '$'}
                        rating={Math.round(product.rating)}
                        deleteProduct={deleteProduct}
                    />
                ))
            ) : (
                <p>Loading products...</p> 
            )}
        </div>
    );
}

export default List;
