import React from 'react';

const AuthForm = ({handleSubmit, handleChange, type, error}) => {
    return (  
        <>
        <form className="d-flex flex-column text-light fw-bold" onSubmit={handleSubmit}>
            <label>Username</label>
            <input
                type="text"
                name="username"
                className="form-control my-2"
                onChange={ handleChange}
            />
            <label>Password</label>
            <input
                type="password"
                name="password"
                className="form-control my-2"
                onChange={ handleChange}

            />
            <button type="submit" className="btn btn-light">
                {type}
            </button>
            {error && <p className='text-dark my-3'>{error}</p> }
        </form>

        </>
    );
}
 
export default AuthForm;