import React, { useState } from 'react';
import "./ContactForm.css"
const ContactForm = () => {
    //   const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: '',
    //   });

    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prevFormData) => ({
    //       ...prevFormData,
    //       [name]: value,
    //     }));
    //   };

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Replace the following alert with your logic to handle form submission
    //     alert('Form submitted successfully!');
    //     // Reset form fields after submission
    //     setFormData({
    //       name: '',
    //       email: '',
    //       message: '',
    //     });
    //   };

    return (
        // <form onSubmit={handleSubmit}>
        <div>

            <form className='Contactform'>
                <div className='row '>
                    <div className='HacksText'>
                        <p> 200+ Hacks to get work done</p>
                        <h1><span className='fw-bold'>Contact</span> Us</h1>
                    </div>
                </div>

                <div>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        //   value={formData.name}
                        //   onChange={handleChange}
                        placeholder='Name'
                        required
                        className='name'
                    />
                </div>
                <div>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        //   value={formData.email}
                        //   onChange={handleChange}
                        placeholder='Email'
                        required
                        className='email'
                    />
                </div>
                <div>

                    <textarea
                        id="message"
                        name="message"
                        //   value={formData.message}
                        //   onChange={handleChange}
                        placeholder='Question'
                        required
                        className='question'
                    />

                    <div className='btnBox'>
                        <button className="submitButton1" type="submit">Submit</button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default ContactForm;
