import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Home = () => {
    document.title = 'FoodBasket.Com - #1 Grocery Shop in Bangladesh!';
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            Home Page
            Welcome {loggedInUser.displayName}
        </div>
    );
};

export default Home;