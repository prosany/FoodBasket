import React, { useContext, useState } from 'react';
import './Login.css';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './FirebaseConfig';
import GoolgeIcon from '../../media/socialicon/google.svg';
import GitHubIcon from '../../media/socialicon/github.svg';
import {
    BrowserRouter as Router,
    useHistory,
    useLocation
} from "react-router-dom";

const Login = () => {
    document.title = 'Login - FoodBasket.Com';
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [isSignedIn, setIsSignedIn] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        displayName: '',
        email: '',
        photo: '',
        password: '',
        error: '',
        success: false,
        updateUser: false
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }

    // SignIn With Google
    const handleGoogleSignIn = async () => {
        const google = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(google)
            .then((result) => {
                setUser(result.user);
                // console.log(result);
                setLoggedInUser(result.user);
                history.replace(from);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    };

    // SignIn With GitHub
    const handleGithubSignIn = async () => {
        const github = new firebase.auth.GithubAuthProvider();
        firebase
            .auth()
            .signInWithPopup(github)
            .then((result) => {
                setUser(result.user);
                // console.log(result);
                setLoggedInUser(result.user);
                history.replace(from);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    return (
        <div>
            <button className="GoogleSignIn-Btn" onClick={handleGoogleSignIn}><img src={GoolgeIcon} alt="Google Login"/> Continue with Google</button><br />
            <button className="GitHubSignIn-Btn" onClick={handleGithubSignIn}><img src={GitHubIcon} alt="GitHub Login"/> Continue with GitHub</button>
        </div>
    );
};

export default Login;