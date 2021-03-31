import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const Admin = () => {
    const [upProductImg, setUpProductImg] = useState('');
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            productIMG: upProductImg
        };
        const url = `http://localhost:8080/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('Server responded'))
        console.log(eventData)
    };

    const handleProductImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '217e4a7b8abfe51f2a79a5865e0b806a');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setUpProductImg(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <div className="container">
                Admin Panel
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" placeholder="Product Name" ref={register} /><br />
                    <input name="price" placeholder="Product Price" ref={register} /><br />
                    <input name="exampleRequired" type="file" onChange={handleProductImageUpload} /><br />
                    <input type="submit" />
                </form>
                image: {upProductImg ? <span>Upload Success</span> : <span>No Image Uploaded Yet</span>}
            </div>
        </div>
    );
};

export default Admin;