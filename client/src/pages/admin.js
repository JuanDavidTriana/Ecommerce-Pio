// src/pages/Admin.js
import React, { useState } from 'react';
import api from '../api/api';

const Admin = () => {
    // Estado del nuevo producto, incluyendo los nuevos campos 'category' e 'imageUrl'
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        imageUrl: ''
    });

    const handleCreateProduct = async (e) => {
        e.preventDefault();
        console.log('Datos del nuevo producto:', newProduct); // Verifica los datos aquí
        try {
            await api.post('/products/create', newProduct);
            setNewProduct({ name: '', description: '', price: '', category: '', imageUrl: '' });
            alert('Producto creado');
        } catch (error) {
            console.error('Error al crear el producto:', error);
            alert('Hubo un problema al crear el producto');
        }
    };


    return (
        <div>
            <h1>Panel de Administración</h1>
            <form onSubmit={handleCreateProduct}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Descripción"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Precio"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Categoría"
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="URL de la Imagen"
                    value={newProduct.imageUrl}
                    onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
                />
                <button type="submit">Crear Producto</button>
            </form>
        </div>
    );
};

export default Admin;
