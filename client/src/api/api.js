// src/api/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

// Interceptor para agregar el token JWT en cada solicitud sin el prefijo "Bearer"
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = token; // Sin el prefijo "Bearer"
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;
