import React, { useState, useEffect } from 'react';

const Logout = () => {
    useEffect(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        window.location = '/login'
    }, []);
    return (
        <div></div>
    );
}

export default Logout;