import React, { useEffect, useState } from 'react'
import "./_menAddProduct.scss"
import { db } from "../../../../Config/ConfigFirebase"
import { doc, setDoc } from 'firebase/firestore';
export const MenAddProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await setDoc(doc(db, "men", "shirt"), formData);
            alert('Message submitted successfully!');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Error adding document: ', error);
            alert('An error occurred while submitting the message.');
        }
    };


    return (
        <div className='add'>
            <p className='add__title'>Men</p>
            <form className="form" onSubmit={handleSubmit}>
                <div className='form__fields'>
                    <p>Product Id :</p>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                </div>
                <div className='form__fields'>
                    <p>Title :</p>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                </div>
                <div className='form__fields'>
                    <p>Brand :</p>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                </div>
                <div className='form__fields'>
                    <p>Description :</p>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                </div>
               
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
