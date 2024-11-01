import React, { useEffect , useState} from "react";
import api from "../api/api";
import ProductCard from "../components/ProductCard";

const Home = () => {
    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get('/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error al obtener los productos:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>productos</h1>
            {products.map((product) => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>);
};

export default Home;