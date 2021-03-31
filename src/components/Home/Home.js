import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Home.css';
import Products from '../Products/Products';

const Home = () => {
    document.title = 'FoodBasket.Com - #1 Grocery Shop in Bangladesh!';
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/products')
            .then(res => res.json())
            .then(product => setProducts(product))
    }, [])
    console.log(products)
    return (
        <div>
            {/* Home Page
            Welcome {loggedInUser.displayName} */}
            <div className="container">
                <div className="Search">
                    <h3>Search for Products</h3>
                    <input type="text" placeholder="Search" />
                    <input type="submit" value="Search" />
                </div>
                <div className="Products">
                    {
                        products.length === 0 && <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    }
                    {
                        products.map(product => <Products key={product._id} product={product}></Products>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;