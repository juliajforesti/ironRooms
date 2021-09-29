import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <div>
                    <Link to='/' className="navbar-brand mb-0 h1">IronRooms</Link>
                    <Link to='/room/form' className="text-dark">Criar sala</Link>
                </div>
                <Link to='/logout' className="text-dark" >Logout</Link>
            </div>
        </nav>
    );
};

export default Navbar;
