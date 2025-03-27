import './form.css';
import { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: 'example@example.com',
        password: ''
    });

    const [formErrors, setFormErrors] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        setFormErrors((prevFormErrors) => ({
            ...prevFormErrors,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted');
        console.log(formData);

        const newFormErrors = {};
        if (formData.username.trim() === '') {
            newFormErrors.username = 'Name is required';
        }
        if (formData.email.trim() === '') {
            newFormErrors.email = 'Email is required';
        }
        if (formData.password.trim() === '') {
            newFormErrors.password = 'Password is required';
        }
        if (Object.keys(newFormErrors).length > 0) {
            setFormErrors(newFormErrors);
            return;
        }
    };

    return (
        <div onSubmit={handleSubmit}>
            <h1>Form</h1>
            <form autoComplete="off">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className={formErrors.username ? 'error' : ''}
                />
                {formErrors.username && <span >{formErrors.username}</span>}
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={formErrors.email ? 'error' : ''}
                />
                {formErrors.email && <span >{formErrors.email}</span>}
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={formErrors.password ? 'error' : ''}
                />
                {formErrors.password && <span >{formErrors.password}</span>}
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Form;