import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './Products.css';


const Products = ({product}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name, price, productIMG, _id, weight }  = product;
    return (
        <>
            <div className="SingleProduct">
                <div className="ProductImage">
                    <img src={productIMG} alt={name} />
                </div>
                <div className="ProductName">
                    <h3>{name} - {weight}</h3>
                </div>
                <div className="ProductInfo">
                    <div className="ProductPrice">
                        <h3>৳ {price}</h3>
                    </div>
                    <div className="BuyProduct">
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;