import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import api from "../configs/api";

const INITIAL_FORM_VALUES = {
    username: "",
    password: "",
};

const Signup = () => {
    const [formValues, setFormValues] = useState({ ...INITIAL_FORM_VALUES });
    const [error, setError] = useState('');
    const history = useHistory()

    const handleInputChange = ({ target: { name, value } }) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await api.post('/auth/signup', formValues)
            history.push('/login')
        } catch (error) {
            setError('Signup falhou')
        }
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <AuthForm handleChange={handleInputChange} handleSubmit={handleSubmit} type='Signup'  />
            {error && <span className="badge bg-danger my-3 position-absolute" style={{bottom: '32%'}}>{error}</span> }
            <p className='mt-3'>Já tem conta? Entre <Link className='link-light' to='/login'>aqui</Link> </p>
        </div>
    );
};

export default Signup;
