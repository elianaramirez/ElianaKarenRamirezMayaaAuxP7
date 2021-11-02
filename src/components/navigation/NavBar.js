import React from 'react';
import "./NavBar.css";

 
const NavBar = () => {
    return (
        <nav className="navbar">
            <h1> Pets</h1>
            <section className="links">  
            <a href="./Componentes/LOGINADMIN/Login ">Login</a>
            <a href="./#">despues</a>
            </section>
        </nav>
    );
};

export default NavBar;