import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import PreLoader from '../PreLoader/PreLoader';
import './CheckOut.css';

const CheckOut = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [productForBuy, setProductForBuy] = useState([]);
    const [preLoad, setPreLoad] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:8080/products/${id}`)
            .then(res => res.json())
            .then(product => {
                setProductForBuy(product)
                setPreLoad(true);
            })
    }, [])
    console.log(productForBuy);
    return (
        <div className="marginTopBottom">
            <div className="container">
                {preLoad ? <div className="ProductForCheckOut">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product Image</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productForBuy.map(product =>
                                    <tr key={product._id}>
                                        <td><img src={product.productIMG} alt={product.name} /></td>
                                        <td>{product.name}</td>
                                        <td>1</td>
                                        <td>{product.price}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="CheckOutBtn">
                        <button className="OrderButton">Confirm Order</button>
                    </div>
                </div> : <div className="center">
                    <PreLoader />
                </div>}
            </div>
        </div>
    );
};

export default CheckOut;