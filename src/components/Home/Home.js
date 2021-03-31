import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Products from '../Products/Products';

const Home = () => {
    document.title = 'FoodBasket.Com - #1 Grocery Shop in Bangladesh!';
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/products')
        .then(res => res.json())
        .then(products => setProducts(products))
    }, [])
    console.log(products)
    return (
        <div>
            Home Page
            Welcome {loggedInUser.displayName}
            <div className="Products">
                {
                    products.map(product => <Products product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default Home;