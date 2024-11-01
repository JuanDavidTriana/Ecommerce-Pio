import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <img src={product.imageUrl} alt={product.name} />
            <Link to={`/products/${product._id}`}>View</Link>
        </div>
    )

}

export default ProductCard