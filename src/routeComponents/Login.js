import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import api from "../configs/api";

const INITIAL_FORM_VALUES = {
    username: "",
    password: "",
};

const Login = () => {

    const [formValues, setFormValues] = useState({ ...INITIAL_FORM_VALUES });
    const [error, setError] = useState("");

    const handleInputChange = ({ target: { name, value } }) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/auth/login", formValues);
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('userId', response.data.user.id)
            setError('')
            window.location = '/'
        } catch (error) {
            console.error(error.response)
            setError("Login falhou");
        }
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <AuthForm
                handleChange={handleInputChange}
                handleSubmit={handleSubmit}
                type="Login"
            />
            {error && (
                <span
                    className="badge bg-danger my-3 position-absolute"
                    style={{ bottom: "32%" }}
                >
                    {error}
                </span>
            )}
            <p className='mt-3'>Ainda não tem uma conta? Cadastre-se <Link className='link-light' to='/signup'>aqui</Link> </p>
        </div>
    );
};

export default Login;
