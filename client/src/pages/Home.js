import React, { useEffect, useState } from "react";
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

        <section className="bg-gray-50 dark:bg-gray-900 py-16">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-8 px-6">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} className="shadow-md rounded-md" />
                ))}
            </div>

        </section>
    );
};

export default Home;