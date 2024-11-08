import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api";

const DetaillProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    // Obtener el token cuando se carga el componente
    useEffect(() => {
        handleGetProduct();
    }, []);

    const handleGetProduct = async () => {
        try {
            const response = await api.get(`/products/${id}`);
            setName(response.data.name);
            setDescription(response.data.description);
            setPrice(response.data.price);
            setCategory(response.data.category);
            setImageUrl(response.data.imageUrl);
        } catch (error) {
            console.error('Error al obtener el producto:', error);
        }
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-16 min-h-screen flex items-center">

            <div>
                <h2>Detalles del Producto</h2>
                <p>Nombre: {name}</p>
                <p>Descripción: {description}</p>
                <p>Precio: {price}</p>
                <p>Categoría: {category}</p>
                <p>URL de la imagen: {imageUrl}</p>
            </div>
        </section>
    )
};  

export default DetaillProduct;