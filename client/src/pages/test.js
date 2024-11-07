import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

const Admin = () => {
    const [token, setToken] = useState(''); // Estado para mostrar el token
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();

    // Obtener el token cuando se carga el componente
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/products', {
                name,
                description,
                price,
                category,
                imageUrl
            });
            console.log(response.data);
            navigate('/');
        } catch (error) {
            if (error.response) {
                console.error('Detalles del error:', error.response.data);
                alert(`Error: ${error.response.data.message || 'Hubo un problema al crear el producto'}`);
            } else {
                console.error('Error al crear el producto:', error.message);
                alert('Hubo un problema al crear el producto');
            }
        }
    }

    return (
        <div>
            <h1>Admin</h1>
            {token && <p>Token del usuario: {token}</p>} {/* Mostrar token si existe */}
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Descripción:
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <br />
                <label>
                    Precio:
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </label>
                <br />
                <label>
                    Categoría:
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                </label>
                <br />
                <label>
                    Imagen:
                    <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                </label>
                <br />
                <button type="submit">Crear</button>
            </form>
        </div>
    );
}

export default Admin;
