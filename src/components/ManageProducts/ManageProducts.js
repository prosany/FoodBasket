import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './ManageProducts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBox, faPen } from '@fortawesome/free-solid-svg-icons';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const { name, price, productIMG, weight } = products;
    useEffect(() => {
        fetch('http://localhost:8080/products')
            .then(res => res.json())
            .then(products => setProducts(products))
    }, [])
    return (
        <div className="container">
            <div className="Dashborad">
                <ul>
                    <li><Link to="/admin"><span><FontAwesomeIcon icon={faPlus} /></span> Add Product</Link></li>
                    <li><Link to="/manage_products"><span><FontAwesomeIcon icon={faBox} /></span> Manage Product</Link></li>
                    <li><Link to="/manage_products"><span><FontAwesomeIcon icon={faPen} /></span> Edit Product</Link></li>
                </ul>
            </div>
            <div className="ProductOptions">
                <div className="PageTitle">
                    <h3>Manage Products</h3>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th scope="col" className="THead">Image</th>
                            <th scope="col" className="THead">Name</th>
                            <th scope="col" className="THead">Price</th>
                            <th scope="col" className="THead">Weight</th>
                            <th scope="col" className="THead">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.length === 0 && <th colSpan="5">Loading...</th>
                        }
                        {
                            products.map(product => <tr id="EntryProduct" key={product._id}>
                                <td><img src={product.productIMG} alt={product.name} /></td>
                                <td>{product.name}</td>
                                <td>৳ {product.price}</td>
                                <td>{product.weight}</td>
                                <td>Delete</td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;