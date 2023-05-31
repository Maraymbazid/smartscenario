import React, { useState } from 'react';
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';



export default function SignUp() {

    const initialFormData = Object.freeze({
        email: '',
        name: '',
        password: '',
        subject: '',
        start_date: '',
    });

    const navigate = useNavigate();


    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            // Trimming any whitespace
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        axiosInstance
            .post(`teachers/register/`, {
                email: formData.email,
                name: formData.name,
                password: formData.password,
                subject: formData.subject,
                start_date: formData.start_date,
            })
            .then((res) => {
                navigate('/login');
                console.log(res);
                console.log(res.data);
            });
    };

    return (
        <>
            <form>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="start_date">Start Date:</label>
                    <input type="text" id="start_date" name="start_date" onChange={handleChange} />
                </div>
                <button type="submit" onClick={handleSubmit}>Register</button>
            </form>

        </>
    );
}