import React, { useEffect, useState } from "react";
import api from '../api/api';

const Admin = () => {
    const [products, setProducts] = React.useState([]);

    const handleDelete = async (productId) => {
        try {
            await api.delete(`/products/${productId}`);
            alert('Producto eliminado correctamente');
            setProducts(products.filter(product => product._id !== productId));
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    }

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
        <section className="bg-gray-50 dark:bg-gray-900 py-16 min-h-screen flex items-center">
            <div className="relative overflow-x-auto shadow-md">
                <div className="flex justify-between items-center px-4 py-2 bg-primary-100 dark:bg-primary-800">
                    <h2 className="text-xl font-semibold text-primary-900 dark:text-white">Products</h2>
                    <a href="/admin/Create" className="px-4 py-2 bg-primary-700 text-white hover:bg-primary-600">Add product</a>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Description</th>
                            <th scope="col" className="px-6 py-3">Price</th>
                            <th scope="col" className="px-6 py-3">Category</th>
                            <th scope="col" className="px-6 py-3">Image</th>
                            <th scope="col" className="px-6 py-3">Edit</th>
                            <th scope="col" className="px-6 py-3">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.name}</th>
                                <td className="px-6 py-4">{product.description}</td>
                                <td className="px-6 py-4">{product.price}$</td>
                                <td className="px-6 py-4">{product.category}</td>
                                <td className="px-6 py-4">
                                    <img src={product.imageUrl} alt={product.name} className="w-10 h-10 object-cover rounded-full" />
                                </td>
                                <td className="px-6 py-4">
                                    <a href={`/admin/edit/${product._id}`} className="font-medium text-primary-500 hover:underline">Edit</a>
                                </td>
                                <td className="px-6 py-4">
                                    <a onClick={() => handleDelete(product._id)} className="font-medium text-red-500 hover:underline">Delete</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Admin;

