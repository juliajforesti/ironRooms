import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import AuthForm from "../components/AuthForm";
import api from "../configs/api";

const INITIAL_FORM_VALUES = {
    username: "",
    password: "",
};

const Login = () => {
    const [formValues, setFormValues] = useState({ ...INITIAL_FORM_VALUES });
    const [error, setError] = useState('');
    const history = useHistory()

    const handleInputChange = ({ target: { name, value } }) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const {data} = await api.post('/auth/login', formValues)
            const {token} = data
            localStorage.setItem('token', token)
            history.push('/home')
        } catch (error) {
            setError('Login falhou')
        }
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <AuthForm handleChange={handleInputChange} handleSubmit={handleSubmit} type='Login' />
            {error && <span className="badge bg-danger my-3 position-absolute" style={{bottom: '32%'}}>{error}</span> }
        </div>
    );
};

export default Login;
