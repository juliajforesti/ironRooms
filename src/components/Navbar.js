import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">IronRooms</span>
                <Link to='/' className="text-dark" >Home</Link>
                <Link to='/room/form' className="text-dark">Criar sala</Link>
            </div>
        </nav>
    );
};

export default Navbar;
